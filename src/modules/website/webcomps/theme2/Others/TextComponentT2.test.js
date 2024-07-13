import ReactDOM from 'react-dom'
import { TextComponent } from './TextComponent'

test('render TextComponent component with errors', () => {
  const div = document.createElement('div')
  ReactDOM.render(<TextComponent />, div)
})

test('render TextComponent component with login', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <TextComponent
      pageData={{
        content: {
          content:
            '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy consectetuer adipiscing.</p>',
        },
        containerClass: { containerClass: '' },
      }}
    />,
    div,
  )
})
