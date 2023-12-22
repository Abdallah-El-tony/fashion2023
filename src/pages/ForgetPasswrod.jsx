import { Breadcrump } from "../components";

const ForgetPasswrod = () => {
  return (
    <div>
        <Breadcrump slug='Forget Password'/>
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-6">
              <div
                style={{
                  boxShadow: "0 0 30px rgba(221, 221, 221, 0.3)",
                  padding: "50px",
                }}
              >
                <h2 className="text-center mb-4">Forget Password ?</h2>
                <form>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="w-100 px-2 border py-3 mb-3 "
                  />
                  <input
                    type="submit"
                    className="filledBtn"
                    value="Send Rest Passwrod"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgetPasswrod;
