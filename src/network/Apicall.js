
import { Graphql } from './WebServices';

export async function fetch_AllUsers(query) {
  try {
    //console.log("url = " + Urls.Login);
    let result = await Graphql(query)
    console.log("Response = ", (result));
    return result;
  } catch (error) {
    console.log(error);
    return { status: false, message: 'Request cant be complete Try Again' };
  }
}




