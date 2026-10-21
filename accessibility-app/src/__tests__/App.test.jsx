import { describe } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe('App SPA Navigation', () => {
    test('renders top skip link with correct target href', () => {
        render(<App />);
        const skipLink = screen.getByText(/Skip to main content/i);
        expect(skipLink).toBeInTheDocument();
        expect(skipLink).toHaveAttribute('href', '#main-content');
    });

    test('switches tabs and updates aria-current page attribute', async () => {
        const user = userEvent.setup();
        render(<App />);

        const servicesTab = screen.getByRole('button', { name: /Clinical Services/i });
        await user.click(servicesTab);

        expect(servicesTab).toHaveAttribute('aria-current', 'page');
        expect(screen.getByRole('heading', { name: /Clinic Service Directory & Practitioner Availability/i })).toBeInTheDocument();
    });

    test('returns to home view when header title button is clicked', async () => {
        const user = userEvent.setup();
        render(<App />);

        const bookTabs = screen.getAllByRole('button', { name: /Book Appointment/i });
        await user.click(bookTabs[0]);

        // Click brand title home button
        const homeBrandBtn = screen.getByRole('button', { name: /Community Healthcare Clinic - Return to homepage/i });
        await user.click(homeBrandBtn);

        expect(screen.getByRole('heading', { name: /Accessible Community Healthcare Services/i })).toBeInTheDocument();
    });
});