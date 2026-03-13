import { items } from '@wix/data';
import { createClient, OAuthStrategy } from '@wix/sdk';
import dotenv from 'dotenv';
dotenv.config();

//To access the Wix APIs, create a client with the createClient() function imported from the @wix/sdk package.
const myWixClient = createClient({
  modules: { items },
  auth: OAuthStrategy({ clientId: process.env.WIX_CLIENT_ID }),
});

const dataItemsList = await myWixClient.items.query('Forms/lightboxContact06').find();

console.log('My Data Items:');
console.log('Total: ', dataItemsList.items.length);
console.log(dataItemsList.items.map((item) => item.data._id).join('\n'));
