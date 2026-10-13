// Firebase কনফিগ। Firebase কনসোল → Project settings → Your apps → Piloting-web → CDN/Config থেকে
// apiKey, storageBucket ও appId কপি করে নিচের ফাঁকা ঘরে বসান। এগুলো গোপন তথ্য নয়, GitHub-এ রাখা যায়।
// apiKey ও appId ফাঁকা থাকলে সিঙ্ক নিষ্ক্রিয় থাকে এবং সাইট আগের মতোই শুধু ডিভাইসে চলে।

export const firebaseConfig = {
  apiKey: "AIzaSyBUoEaXZXDYvppr4qGJbEgD1zmEIKE3oqc",
  authDomain: "piloting1-ac61a.firebaseapp.com",
  projectId: "piloting1-ac61a",
  storageBucket: "piloting2-e3a14.firebasestorage.app",
  messagingSenderId: "229420553079",
  appId: "1:1057706541622:web:226c48d06d34d0e37fce97"
};

// Firestore-এর যে collection-এ ডেটা জমা হবে
export const COLLECTION = "sync";

// index.html-এর যে localStorage কীগুলো ডিভাইসগুলোর মধ্যে সিঙ্ক হবে
export const SYNC_KEYS = [
  "lessonPlans",
  "students",
  "nakhapara_glance_data",
  "nakhapara_senior_officers",
  "nakhapara_evaluation",
  "nakhapara_last_visit_date",
  "nakhapara_last_visit_officer",
  "nakhapara_last_visit_desig",
  "nakhapara_visit_desig_options"
];
