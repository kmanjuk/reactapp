import React, { useRef } from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useOnClickOutside } from './OnClickOutside'; // Adjust import based on your file structure

describe('useOnClickOutside hook', () => {
  test('should call handler when clicking outside the ref element', () => {
    const handler = jest.fn();
    const Component = () => {
      const ref = useRef(null);
      useOnClickOutside(ref, handler);
      return (
        <div>
          <div ref={ref}>Inside</div>
          <div>Outside</div>
        </div>
      );
    };

    const { container } = render(<Component />);

    // Click on the "Outside" div
    fireEvent.mouseDown(container.querySelector('div:last-child'));

    // Assert that the handler was called
    expect(handler).toHaveBeenCalled();
  });

  test('should not call handler when clicking inside the ref element', () => {
    const handler = jest.fn();
    const Component = () => {
      const ref = useRef(null);
      useOnClickOutside(ref, handler);
      return (
        <div>
          <div ref={ref}>Inside</div>
          <div>Outside</div>
        </div>
      );
    };

    const { container } = render(<Component />);

    // Click on the "Inside" div
    fireEvent.mouseDown(container.querySelector('div:first-child'));

    // Assert that the handler was not called
    expect(handler).not.toHaveBeenCalled();
  });
});

