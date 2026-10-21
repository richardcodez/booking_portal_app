import { describe } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm from "../components/BookingForm";

describe('BookingForm Component', () => {
    test('renders all input controls with accessible labels', () => {
        render(<BookingForm />);
        expect(screen.getByLabelText(/Patient Full Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Contact Phone Number/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Confirm Appointment/i })).toBeInTheDocument();
    });

    test('associates inputs with aria-describedby hints', () => {
        render(<BookingForm />);
        const nameInput = screen.getByLabelText(/Patient Full Name/i);
        expect(nameInput).toHaveAttribute('aria-describedby');
    });

    test('triggers validation errors on blur when inputs are invalid', async () => {
        const user = userEvent.setup();
        render(<BookingForm />);

        const nameInput = screen.getByLabelText(/Patient Full Name/i);
        await user.click(nameInput);
        await user.tab(); // trigger blur

        expect(nameInput).toHaveAttribute('aria-invalid', 'true');
        expect(screen.getByText(/Error: Full name must be at least 2 characters long/i)).toBeInTheDocument();
    });

    test('announces submission success via aria-live region when valid', async () => {
        const user = userEvent.setup();
        render(<BookingForm />);

        const nameInput = screen.getByLabelText(/Patient Full Name/i);
        const phoneInput = screen.getByLabelText(/Contact Phone Number/i);
        const submitBtn = screen.getByRole('button', { name: /Confirm Appointment/i });

        await user.type(nameInput, 'Arthur Pendelton');
        await user.type(phoneInput, '5551234567');
        await user.click(submitBtn);

        expect(screen.getByText(/Your medical appointment has been scheduled successfully!/i)).toBeInTheDocument();
    });
})