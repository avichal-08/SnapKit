import {v2 as cloudinary} from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();

cloudinary.config({
    cloud_name:'dcwso7qst',
    api_key:'979195625814242',
    api_secret:'zzOIq5VW02vbMjOdmS-IqnGe4Zo'
});

export default cloudinary;