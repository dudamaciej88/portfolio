import React, { useState, useEffect } from "react";
import * as S from "./contactForm.style";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { sendForm, formReset } from "../../redux/actions/index";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const language = useSelector((state) => state.language.language);
  const error = useSelector((state) => state.contact.error);
  const success = useSelector((state) => state.contact.success);
  const loading = useSelector((state) => state.contact.loading);
  const [opacityValue, setOpacityValue] = useState("0");
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    onSubmit: (values) => {
      dispatch(sendForm(values));
    },
  });

  useEffect(() => {
    dispatch(formReset());
    let timer = setTimeout(() => {
      setOpacityValue("1");
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch]);

  return (
    <S.Form opacityValue={opacityValue} onSubmit={formik.handleSubmit}>
      <div>
        <S.Label htmlFor="name">{language.contact.name}</S.Label>
        <S.Input
          placeholder={language.contact.name}
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
          required
        />

        <S.Label htmlFor="email">{language.contact.email}</S.Label>
        <S.Input
          placeholder={language.contact.email}
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          required
        />
      </div>
      <S.Label htmlFor="message">{language.contact.message}</S.Label>
      <S.Textarea
        rows="10"
        placeholder={language.contact.message}
        id="message"
        name="message"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.message}
        onBlur={formik.handleBlur}
        required
      />
      <S.Button type="submit">{language.contact.send}</S.Button>
      {success && <S.P>{language.contact.success}</S.P>}
      {error && <S.P>{language.contact.error}</S.P>}
    </S.Form>
  );
};

export default ContactForm;
