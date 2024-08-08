import * as React from 'react'

/**
 * A custom React hook that triggers a callback when a click or touch event occurs outside of the specified element.
 *
 * @param {React.RefObject<HTMLElement>} ref - A React ref object attached to the element that should not trigger the callback when clicked or touched.
 * @param {Function} handler - The callback function to be invoked when a click or touch event occurs outside of the referenced element.
 *
 * @template T
 * @example
 * const MyComponent = () => {
 *   const ref = React.useRef(null)
 *   const handleClickOutside = () => {
 *     console.log('Clicked outside!')
 *   }
 *
 *   useOnClickOutside(ref, handleClickOutside)
 *
 *   return (
 *     <div ref={ref}>
 *       Click outside this element
 *     </div>
 *   )
 * }
 */
export const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}
