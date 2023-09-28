"use client";
import { useCallback, useState } from "react";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";

const RegisterModal = () => {
  const registermodal = useRegisterModal();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        registermodal.onClose();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subtitle="Create an Account" />
      <Input 
      id="email"
      label="Email"
      type="email"
      disabled={loading}
      errors={errors}
      required
      register={register}

      />

<Input 
      id="name"
      label="Name"
      type="text"
      disabled={loading}
      errors={errors}
      required
      register={register}

      />

<Input 
      id="password"
      label="Password"
      type="password"
      disabled={loading}
      errors={errors}
      required
      register={register}

      />


    </div>
  );

  return (
    <Modal
      disabled={loading}
      isOpen={registermodal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registermodal.onClose}
      onSubmit={handleSubmit(onsubmit)}
      body={bodyContent}
    />
  );
};

export default RegisterModal;
