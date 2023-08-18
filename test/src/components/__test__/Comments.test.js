import  {render,screen, waitFor} from '@testing-library/react'
import Comments from '../Comments'
import axios from 'axios'

jest.mock("axios")

const dummycomments =[
    {
        postId: 1,
        id: 1,
        name: "id labore ex et quam laborum",
        email: "Eliseo@gardner.biz",
        body: "laudantium enim quasi est quidem magnam voluptate ipsam eos",
      },
      {
        postId: 1,
        id: 2,
        name: "quo vero reiciendis velit similique earum",
        email: "Jayne_Kuhic@sydney.com",
        body: "est natus enim nihil est dolore omnis voluptatem numquam",
      },
]

  describe('Comments',()=>{
    it('should get all comments' , async()=>{
        
        axios.get.mockResolvedValue({data:dummycomments})

        render(<Comments/>)

        const comments=await waitFor(()=>screen.getAllByTestId('comment'))

        expect(comments).toHaveLength(2)

    })
  })

 


























