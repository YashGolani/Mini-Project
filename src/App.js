import React, { useState, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import Table from "./components/Table";
import AddContact from "./components/AddContact";
import Filters from "./components/Filters";

const initialData = [
  {
    id: uuidv4(),
    name: "yash",
    company: "company1",
    status: "active",
    notes: "test",
  },
  {
    id: uuidv4(),
    name: "amit",
    company: "company2",
    status: "active",
    notes: "test2",
  },
  {
    id: uuidv4(),
    name: "anil",
    company: "company3",
    status: "closed",
    notes: "test3",
  },
  {
    id: uuidv4(),
    name: "himanshu",
    company: "company4",
    status: "closed",
    notes: "test4",
  },
];

function App() {
  const [contacts, setContancts] = useState(initialData);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [status, setStatus] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [companyList, setCompanyList] = useState(
    initialData.map((d) => {
      return { label: d.company, value: d.company };
    })
  );

  const [addFormData, setAddFormData] = useState({
    id: "",
    name: "",
    company: "",
    status: "active",
    notes: "",
  });

  const handlerFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  const handlerAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: uuidv4(),
      name: addFormData.name,
      company: addFormData.company,
      status: addFormData.status,
      notes: addFormData.notes,
    };

    setContancts((curr) => [...curr, newContact]);
    setCompanyList((curr) => [
      ...curr,
      {
        label: addFormData.company,
        value: addFormData.company,
      },
    ]);
    toggleModal();
  };

  const handleDeleteClick = (contanctId) => {
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === contanctId);
    newContacts.splice(index, 1);
    setContancts(newContacts);
  };

  const toggleModal = () => {
    setModalIsOpen((curr) => !curr);
  };

  const handleCompanyFilterChange = (e) => {
    setFilteredCompanies(e);
  };

  const handleStatusChange = (e) => {
    setStatus(e);
  };

  const filteredContactsByCompany = useMemo(() => {
    return contacts.filter(
      (c) =>
        !filteredCompanies.length ||
        filteredCompanies.findIndex((f) => f.value === c.company) > -1
    );
  }, [contacts, filteredCompanies]);

  const filteredContactsByStatus = useMemo(() => {
    return filteredContactsByCompany.filter(
      (c) =>
        !status.length || status.findIndex((s) => s.value === c.status) > -1
    );
  }, [filteredContactsByCompany, status]);

  return (
    <div className="container">
      <Header toggleModal={toggleModal} />

      {contacts.length ? (
        <div className="filter-container">
          <Filters
            options={companyList}
            onChange={handleCompanyFilterChange}
            value={filteredCompanies}
          />
          <Filters
            options={[
              {
                label: "Active",
                value: "active",
              },
              {
                label: "Closed",
                value: "closed",
              },
            ]}
            onChange={handleStatusChange}
            value={status}
          />
        </div>
      ) : null}

      {filteredContactsByStatus.length ? (
        <Table
          contacts={filteredContactsByStatus}
          handleDeleteClick={handleDeleteClick}
        />
      ) : (
        <div>No Members found</div>
      )}

      <AddContact
        handlerAddFormSubmit={handlerAddFormSubmit}
        toggleModal={toggleModal}
        handlerFormChange={handlerFormChange}
        modalIsOpen={modalIsOpen}
      />
    </div>
  );
}

export default App;
