import {NextPage} from "next";
import {arealAPI} from "../../../src/api/admin/areals/ArealService";
import {IAreal} from "../../../src/api/admin/areals/areals.type";
import {useState} from "react";
import {useForm} from "react-hook-form";

const ArealsPage: NextPage = () => {
  const {data: areals, isLoading} = arealAPI.useFetchAllArealsQuery()
  const [createAreal, {data}] = arealAPI.useCreateArialMutation()

  const {register, handleSubmit, } = useForm();
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("picture", data.picture[0]);
    formData.append("title", data.title);
    await createAreal(formData as IAreal)
  };

  return (
    <div>
      <form className={'flex flex-col p-8 m-5 gap-5'} onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("title")} className={'text-black'}/>
        <input type="file" {...register("picture")} />

        <input type="submit"/>
      </form>
      {isLoading && <p>Loading...</p>}
      {/*<div>{areals?.length > 0 && areals.map((areal, index) => <p className={''} key={index}>{areal.title}</p>)}</div>*/}
    </div>

  );
};

export default ArealsPage;
