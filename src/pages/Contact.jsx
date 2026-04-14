import { useFormik } from "formik";
import * as yup from "yup";
import clsx from "clsx";

// images
import contactpng from "../assets/Hero/contact.png";
import interior_180x from "../assets/Hero/interior_180x.avif";
import growth_180x from "../assets/Hero/growth_180x.avif";
import happy_180x from "../assets/Hero/happy_180x.avif";
import eco_friendly_180x from "../assets/Hero/eco_friendly_180x.avif";
import { toast } from "react-toastify";

const Contact = () => {

  // ✅ Formik setup
  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      email: "",
      message: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Name is required").min(3, "Min 3 characters"),
      mobile: yup.string().required("Mobile is required").min(10, "Enter valid number"),
      email: yup.string().required("Email is required").email("Invalid email"),
      message: yup.string().required("Message is required").min(5, "Min 5 characters"),
    }),
    onSubmit: async (values, { resetForm }) => { 
      console.log(values);
      alert("✅ Form submitted successfully! ");
      toast.success(" Form submitted successfully! ");
      resetForm();
    }
  });

  // ✅ Dynamic classes
  const handleClasses = (key) =>
    clsx("form-control", {
      "is-invalid": formik.touched[key] && formik.errors[key],
      "is-valid": formik.touched[key] && !formik.errors[key],
    });

  return (
    <>
      <div className="container my-5">
        <div className="row">

          {/* LEFT SIDE */}
          <div className="col-sm-6 px-5">
            <h3 className="text-center my-5">Delivery</h3>
            <p>
              Shree Jal Devi Stone offers the convenience of having your order delivered at an additional
              delivery fee. Geographic area and quantities determine the cost of delivery. It is recommended
              that you call in advance to determine the delivery charges and schedule your delivery at your convenience.
              <br /><br />
              Customer service is our priority. Let us know how we can be of service to you! We will do
              everything we can to make your project run smoother.
            </p>

            <img src={contactpng} alt="" className="img-fluid mt-4" />
          </div>

          {/* RIGHT SIDE */}
          <div className="col-sm-6">
            <h3 className="text-center my-5">Contact Us</h3>

            <div className="card">
              <div className="card-body">

                <h4 className="my-3">We would love to hear from you.</h4>
                <p className="text-secondary">
                  We’re always open to meaningful collaborations and quality craftsmanship.
                  If you have something great to share, feel free to reach out to us.
                </p>

                {/* FORM */}
                <form onSubmit={formik.handleSubmit}>

                  <div className="row mt-4">
                    {/* Name */}
                    <div className="col-sm-6">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          id="name"
                          placeholder="Name"
                          className={handleClasses("name")}
                          {...formik.getFieldProps("name")}
                        />
                        <label htmlFor="name">Name</label>
                        <div className="invalid-feedback">{formik.errors.name}</div>
                      </div>
                    </div>

                    {/* Mobile */}
                    <div className="col-sm-6">
                      <div className="form-floating mb-3">
                        <input
                          type="tel"
                          id="mobile"
                          placeholder="Mobile"
                          className={handleClasses("mobile")}
                          {...formik.getFieldProps("mobile")}
                        />
                        <label htmlFor="mobile">Phone</label>
                        <div className="invalid-feedback">{formik.errors.mobile}</div>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      className={handleClasses("email")}
                      {...formik.getFieldProps("email")}
                    />
                    <label htmlFor="email">Email address</label>
                    <div className="invalid-feedback">{formik.errors.email}</div>
                  </div>

                  {/* Message */}
                  <div className="form-floating mb-3">
                    <textarea
                      id="message"
                      placeholder="Message"
                      style={{ height: "120px" }}
                      className={handleClasses("message")}
                      {...formik.getFieldProps("message")}
                    ></textarea>
                    <label htmlFor="message">Message</label>
                    <div className="invalid-feedback">{formik.errors.message}</div>
                  </div>

                  {/* Button */}
                  <button type="submit" className="btn btn-dark w-100 btn-lg my-4">
                    Send
                  </button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="container my-5">
        <div className="row text-center">

          <div className="col-6 col-sm-3">
            <img src={interior_180x} alt="" width={50} height={50} />
            <h5 className="mt-2">Good Design</h5>
            <p>Designs that speak of aesthetics and functionality!</p>
          </div>

          <div className="col-6 col-sm-3">
            <img src={growth_180x} alt="" width={50} height={50} />
            <h5 className="mt-2">Good For You</h5>
            <p>Every shipment is insured, every payment is secure with us!</p>
          </div>

          <div className="col-6 col-sm-3">
            <img src={happy_180x} alt="" width={50} height={50} />
            <h5 className="mt-2">Good For People</h5>
            <p>We are here listening to your custom needs or any requirements!</p>
          </div>

          <div className="col-6 col-sm-3">
            <img src={eco_friendly_180x} alt="" width={50} height={50} />
            <h5 className="mt-2">Good For Planet</h5>
            <p>Keeping in mind all regulations that benefit all.</p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;