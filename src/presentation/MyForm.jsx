import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FRMSelect from "../shared/TAGSelect";
import TAGTextField from "../shared/TAGTextField";
import TAGButton from "../shared/TAGButton";
import { formSubmitMessage } from "../utils/constant";
import { useMovieData } from "../hooks/useMovieData";
import TAGForm from "../shared/TAGForm";

const schema = yup
  .object({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
  })
  .required();

const MyForm = () => {
  const { data: movieData, isLoading, isError } = useMovieData();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      favoriteMovie: movieData?.allFilms?.films[0]?.id,
    },
  });

  const onSubmit = (data) => {
    console.log("form-data", data);
  };

  return (
    <div className="form-inner-wrapper">
      {!isSubmitSuccessful ? (
        <>
          {Object.keys(errors)?.map((err, index) => {
            return (
              <p key={index} className="input-error">
                {errors[err]?.message}
              </p>
            );
          })}
          <TAGForm handleSubmit={handleSubmit(onSubmit)}>
            <div className="input-row">
              <TAGTextField
                {...register("firstName")}
                label="First Name"
                isRequired={true}
                inputError={errors?.firstName?.message}
              />
              <TAGTextField
                {...register("lastName")}
                label="Last Name"
                isRequired={true}
                inputError={errors?.lastName?.message}
              />
              <FRMSelect
                {...register("favoriteMovie")}
                label="Favorite Star Wars Movies"
                dynamicOptions={movieData?.allFilms?.films}
                isError={isError}
                isLoading={isLoading}
              />
            </div>
            <div className="form-action">
              <TAGButton disabled={isLoading} />
            </div>
          </TAGForm>
        </>
      ) : (
        <div className="center">
          <p>{formSubmitMessage}</p>
        </div>
      )}
    </div>
  );
};
export default MyForm;
