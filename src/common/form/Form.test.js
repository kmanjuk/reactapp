import React from 'react'
import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Form } from './Form'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Y from 'yup'
import axios from 'axios'
import { useUpdateCall } from '../../lib/api/update'
import {useCreateCall} from '../../lib/api/create'
import { createYupSchema } from '../../lib/createYUPSchema'
import { InputField } from './formElements/InputField'
import { FormButtons } from './FormButtons'
import { DeleteConfirm } from './DeleteConfirm'

jest.mock('axios')
jest.mock('../../lib/api/update', () => ({
  useUpdateCall: jest.fn(),
}))

jest.mock('../../lib/api/create', () => ({
  useCreateCall: jest.fn(),
}))

jest.mock('react-hook-form', () => ({
  useForm: jest.fn(),
  Controller: jest.fn(({ children }) => children({})),
}))

jest.mock('@hookform/resolvers/yup', () => ({
  yupResolver: jest.fn(),
}))

jest.mock('../../lib/createYUPSchema', () => ({
  createYupSchema: jest.fn(),
}))

jest.mock('./formElements/InputField', () => ({
  InputField: jest.fn(() => <div>InputField</div>),
}))

jest.mock('./FormButtons', () => ({
  FormButtons: jest.fn(() => <div>FormButtons</div>),
}))

jest.mock('./DeleteConfirm', () => ({
  DeleteConfirm: jest.fn(() => <div>DeleteConfirm</div>),
}))

const formSchema = {
  buildValidation: [],
  schema: [
    {
      element: 'InputField',
      name: 'pageName',
      type: 'text',
      hidden: false,
      size: 6,
      placeholder: 'Module Name',
    },
  ],
  makebool: false,
  handleDatefields: false,
  formAPI: '/api/form',
  message: { title: 'Test Title', message: 'Test Message' },
}

const defaultData = {}
const moduleSchema = {}
const envData = { REACT_APP_API_URL_LOCAL: 'http://localhost' }
const authDetails = { session: { user: { userId: '123' } } }

describe('Form component', () => {
  const mockUpdateCallMutation = jest.fn()
  const mockCreateCallMutation = jest.fn()
  const mockDeleteCallMutation = jest.fn()

  beforeEach(() => {
    useForm.mockReturnValue({
      register: jest.fn(),
      handleSubmit: jest.fn((fn) => fn),
      formState: { errors: {} },
    })

    useUpdateCall.mockReturnValue({
      mutateAsync: mockUpdateCallMutation,
    })

    useCreateCall.mockReturnValue({
      mutateAsync: mockCreateCallMutation,
    })
  })

  test('renders correctly', () => {
   const {container} = render(
      <Form
        isViewOnly={false}
        defaultData={defaultData}
        formSchema={formSchema}
        moduleSchema={moduleSchema}
        isAdd={false}
        isRowForm={false}
        setOpenFormModal={jest.fn()}
        isUpdate={true}
        envData={envData}
        addUserObject={false}
        authDetails={authDetails}
      />,
    )
    expect(screen.getByTestId('formAdd')).toBeInTheDocument()
    expect(screen.getByTestId('inputFieldForm')).toBeInTheDocument()
    expect(container.querySelector('button')).toBeInTheDocument()
  })

  test('form submit calls onCreate when isAdd is true', async () => {
    const onCreate = jest.fn()
    render(
      <Form
        isViewOnly={false}
        defaultData={defaultData}
        formSchema={formSchema}
        moduleSchema={moduleSchema}
        isAdd={true}
        isRowForm={false}
        setOpenFormModal={jest.fn()}
        isUpdate={false}
        envData={envData}
        addUserObject={false}
        authDetails={authDetails}
      />,
    )

    fireEvent.submit(screen.getByTestId('formAdd'))
    await waitFor(() => {
      expect(mockCreateCallMutation).toHaveBeenCalled()
    })
  })

  test('form submit calls onUpdate when isAdd is false', async () => {
    const onUpdate = jest.fn()
    render(
      <Form
        isViewOnly={false}
        defaultData={defaultData}
        formSchema={formSchema}
        moduleSchema={moduleSchema}
        isAdd={false}
        isRowForm={false}
        setOpenFormModal={jest.fn()}
        isUpdate={true}
        envData={envData}
        addUserObject={false}
        authDetails={authDetails}
      />,
    )

    fireEvent.submit(screen.getByTestId('formAdd'))
    await waitFor(() => {
      expect(mockUpdateCallMutation).toHaveBeenCalled()
    })
  })

  test('form submit calls onUpdate when isAdd is false and refreshAppData is true', async () => {
    const onUpdate = jest.fn()
    const formSchemaProps = {...formSchema, refreshAppData:true}
    render(
      <Form
        isViewOnly={false}
        defaultData={defaultData}
        formSchema={formSchemaProps}
        moduleSchema={moduleSchema}
        isAdd={false}
        isRowForm={false}
        setOpenFormModal={jest.fn()}
        isUpdate={true}
        envData={envData}
        addUserObject={false}
        authDetails={authDetails}
      />,
    )

    fireEvent.submit(screen.getByTestId('formAdd'))
    await waitFor(() => {
      expect(mockUpdateCallMutation).toHaveBeenCalled()
    })
  })

  test('displays errors when validation fails', async () => {
    useForm.mockReturnValueOnce({
      register: jest.fn(),
      handleSubmit: jest.fn((fn) => fn),
      formState: { errors: { testField: { message: 'Test Error' } } },
    })

    render(
      <Form
        isViewOnly={false}
        defaultData={defaultData}
        formSchema={formSchema}
        moduleSchema={moduleSchema}
        isAdd={true}
        isRowForm={false}
        setOpenFormModal={jest.fn()}
        isUpdate={false}
        envData={envData}
        addUserObject={false}
        authDetails={authDetails}
      />,
    )

    expect(screen.getByText('Test Error')).toBeInTheDocument()
  })

  test('delete confirmation is shown when deleteConfirm is true', () => {
    render(
      <Form
        isViewOnly={false}
        defaultData={defaultData}
        formSchema={formSchema}
        moduleSchema={moduleSchema}
        isAdd={true}
        isRowForm={false}
        setOpenFormModal={jest.fn()}
        isUpdate={false}
        envData={envData}
        addUserObject={false}
        authDetails={authDetails}
      />,
    )

    fireEvent.click(screen.getByText('FormButtons')) // Simulate opening delete confirmation

    expect(screen.getAllByText('DeleteConfirm')[0]).toBeInTheDocument()
  })
})
