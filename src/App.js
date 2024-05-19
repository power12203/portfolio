import "./App.css";
import { Route, Routes } from "react-router-dom";
import PostListPage from "./page/PostListPage";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import WritePage from "./page/WritePage";
import PostPage from "./page/PostPage";
import MainPage from "./page/MainPage"
import Iodging from "./components/mian/Iodging"

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/post" element={<PostListPage/>}/>
      <Route path="/tnrth" element={<Iodging/>}/>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/write/:postId" element={<WritePage />} />
      <Route path="/:username">
        <Route index element={<PostListPage />} />
        <Route path=":postId" element={<PostPage />} />
      </Route>
    </Routes>
  );
}

export default App;
