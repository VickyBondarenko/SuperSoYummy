import { Auth } from "../components/Auth/Auth";
import { PageLoader } from "../components/Preloader/PageLoader";
import { useAppSelector } from "../hooks/reduxHooks";
import { selectIsLoading } from "../redux/authSlice/authSelectors";

const RegisterPage = () => {
  const isLoading = useAppSelector(selectIsLoading);
  return (
    <>
      {isLoading && <PageLoader />}
      {!isLoading && <Auth page="register" />}
    </>
  );
};

export default RegisterPage;
