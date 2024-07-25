import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

import css from "./App.module.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import { selectLoading, selectError } from "../../redux/contactsSlice";

export default function App() {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const isError = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

    return (<div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {loading && <Loader/>}
        {isError && <Error message={isError}/>}
        <ContactList />
    </div>);
}