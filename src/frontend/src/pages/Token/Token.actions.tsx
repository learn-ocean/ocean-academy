import { store } from 'index'
import { RequestTokenIdInputs, RequestTokenIdOutputs} from 'shared/user/RequestTokenId'

export const reqTokenId = async({ course }: RequestTokenIdInputs) : Promise<RequestTokenIdOutputs> => {

    const tokenId = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/request-token-id`,
    {
      method: "POST",
      body: JSON.stringify({course: course}),
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${store.getState().auth.jwt}`
      }
    }
    )


    return tokenId.json();

}