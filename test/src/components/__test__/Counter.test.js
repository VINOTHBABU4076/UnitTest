import {render,fireEvent,screen} from '@testing-library/react'  
import  renderer   from 'react-test-renderer'


import Counter from '../Counter'

 describe('Counter', () =>{
    it('should increment Counter', () =>{


     render(<Counter/>)

     const counter= screen.getByTestId('counter')
     const incrementbtn=screen.getByTestId('increment')

     fireEvent.click(incrementbtn)

     expect(counter).toHaveTextContent('2')
 })
 it('should decrement Counter',()=>{
    render(<Counter/>)

     const counter= screen.getByTestId('counter')
     const decrementbtn=screen.getByTestId('decrement')

     fireEvent.click(decrementbtn)

     expect(counter).toHaveTextContent('0')
 })

 })
describe('Counter Snapshot',() =>{
    it('should matches DOM Snapshot',() => {
        const tree=renderer.create(<Counter/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
 })

