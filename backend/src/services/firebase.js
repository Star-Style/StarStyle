import admin from "firebase-admin";
import dotenv from 'dotenv';
// import { getStorage } from "firebase-admin/storage";

dotenv.config();

const serviceAccount = {
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: process.env.FIREBASE_AUTH_URI,
    token_uri: process.env.FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_CERT,
    client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT_URL
};

const firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// // lets users upload closet items images
// export const uploadImage = async (file, path) => {
//     const bucket = getStorage().bucket();
//     const fileUpload = bucket.file(path);

//     const stream = fileUpload.createWriteStream({
//         metadata: {
//             contentType: file.mimetype,
//         },
//     });

//     return new Promise((resolve, reject) => {
//         stream.on('error', (err) => reject(err));
//         stream.on('finish', async () => {
//             await fileUpload.makePublic();
//             const publicUrl = `https://storage.googleapis.com/${bucket.name}/${path}`;
//             resolve(publicUrl);
//         });
//         stream.end(file.buffer);
//     });
// };

// export const auth = firebase.auth();

export default firebase;