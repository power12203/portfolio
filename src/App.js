import "./App.css";
import { Route, Routes } from "react-router-dom";
import PostListPage from "./page/PostListPage";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import WritePage from "./page/WritePage";
import PostPage from "./page/PostPage";
import MainPage from "./page/MainPage";
import Iodging from "./components/mian/Iodging";
import Airbnb from "./page/AirbnbPage";
import NewPage from "./page/NewPage";
import AirbnbPage from "./page/AirbnbPage";
import PaymentPage from "./page/PaymentPage";


function App() {
  const value = { user: 'exampleUser' };
    const email = 'example@example.com';
    const params = { id: 'serviceId' };
    const config = { PAYMENT_KEY: 'f357ab0cfc7d81f25b6e60877dc2a88b' };
    const service = { title: '1개월', price: '10000' };
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/post" element={<PostListPage />} />
      <Route path = "/test" element={<PaymentPage value={value}
            email={email}
            params={params}
            config={config}
            service={service} />}/>
      <Route path="/tnrth" element={<NewPage />} />
      <Route path="/airbnb" element={<AirbnbPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/write/:postId" element={<WritePage />} />
      <Route path="/:username">
        <Route index element={<MainPage />} />
        <Route path=":postId" element={<PostPage />} />
      </Route>
    </Routes>
  );
}

export default App;
