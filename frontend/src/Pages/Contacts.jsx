import { Heading, Skeleton, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { ContactsCard } from "../Components/ContactsCard";
import { Pagination } from "../Components/Pagination";

export const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const totalPages = useRef(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/contacts?page=${page}&size=10`)
      .then((res) => {
        setContacts(res.data.contacts);
        totalPages.current = res.data.totalPages;
      })
      .catch((e) => alert("Error Occured"))
      .finally(() => setLoading(false));
  }, [page]);

  const handlePageChange = (p) => {
    setPage(p);
  };

  return (
    <VStack
      pb={4}
      w={500}
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      margin={"auto"}
      gap={5}
      my={5}
    >
      <Heading mt={5}>Contacts</Heading>
      <VStack w={"100%"} gap={2}>
        {contacts.map((e) => (
          <Skeleton isLoaded={!loading}>
            <ContactsCard
              key={e._id}
              id={e._id}
              firstName={e.firstName}
              lastName={e.lastName}
            />
          </Skeleton>
        ))}
      </VStack>
      <Pagination
        currentPage={page}
        totalPages={totalPages.current}
        handlePageChange={handlePageChange}
      />
    </VStack>
  );
};
