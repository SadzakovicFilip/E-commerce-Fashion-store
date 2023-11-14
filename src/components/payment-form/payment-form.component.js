import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";
import { async } from "@firebase/util";
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
  };
  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit Card Payment : </h2>
        <CardElement />
        <Button
          style={{ marginTop: "10px" }}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          Pay Now via Stripe
        </Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
