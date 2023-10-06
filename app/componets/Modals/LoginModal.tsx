"use client";
import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import toast from "react-hot-toast";
import Button from "../Button";
import { redirect, useRouter } from "next/navigation";

const LoginModal = () => {
  const router = useRouter();

  const loginModal = useLoginModal();
  const registermodal = useRegisterModal();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: " ",
      password: " ",
    },
  });

  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);

    signIn("credentials", { ...data, redirect: false }).then((callback) => {
      setLoading(false);

      if (callback?.ok) {
        toast.success("Logged In");

        router.refresh();

        loginModal.onClose();
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  const toggle = useCallback(
    () => {
      loginModal.onClose()
      registermodal.onOpen()
    },
    [loginModal, registermodal],
  )
  

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome back" subtitle="Login to Your Account" />
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

  const FooterContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />

      <Button
        outline
        label="Continue With Google"
        icon={FcGoogle}
        onClick={() => signIn("google")}
      />

      <Button
        outline
        label="Continue With Github"
        icon={AiFillGithub}
        onClick={() => signIn("github")}
      />

      <div className=" text-neutral-500 text-center mt-4 font-light">
        <div className="flex flex-row items-center gap-2 justify-center ">
          <div className="">First timer using airbnb?</div>

          <div
            className="text-neutral-800 cursor-pointer hover:underline"
            onClick={toggle}
          >
            Create an Account
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={loading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onsubmit)}
      body={bodyContent}
      footer={FooterContent}
    />
  );
};

export default LoginModal;
