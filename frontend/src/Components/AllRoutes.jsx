import { Route, Routes } from "react-router-dom";
import { ContactInfo } from "../Pages/ContactInfo";
import { Contacts } from "../Pages/Contacts";
import { Messages } from "../Pages/Messages";
import { MessageScreen } from "../Pages/MessageScreen";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Contacts />} />
      <Route path={"/messageScreen/:id"} element={<MessageScreen />} />
      <Route path={"/contactInfo/:id"} element={<ContactInfo />} />
      <Route path={"/messages"} element={<Messages />} />
    </Routes>
  );
};
