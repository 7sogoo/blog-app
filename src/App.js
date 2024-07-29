import "./App.css";
import { Home } from "./components/Layout/Home";
import { Blogs } from "./components/Layout/Blogs";
import { NoPage } from "./components/Layout/404";
import { Contact } from "./components/Layout/Contact";
import { Route, Routes } from "react-router-dom";
import { BasicLayout } from "./components/Layout/BasicLayout";
import { BlogDetail } from "./components/BlogDetail/BlogDetail";

function App() {
  return (
    <BasicLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/*" element={<NoPage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path=":id" element={<BlogDetail/>} />
      </Routes>
    </BasicLayout>
  );
}

export default App;
