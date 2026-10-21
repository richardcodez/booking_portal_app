import { describe } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "../components/Modal";

describe('Modal Component', () => {
    test('does not render when isOpen is false', () => {
        render(<Modal isOpen={false} onClose={() => {}} />);
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    test('renders dialog with aria-modal when isOpen is true', () => {
        render(<Modal isOpen={true} onClose={() => {}} />);
        const dialog = screen.getByRole('dialog');
        expect(dialog).toBeInTheDocument();
        expect(dialog).toHaveAttribute('aria-modal', 'true');
    });

    test('calls onClose when Escape key is pressed', async () => {
        const user = userEvent.setup();
        const handleClose = vi.fn();

        render(<Modal isOpen={true} onClose={handleClose} />);
        await user.keyboard('{Escape}');
        expect(handleClose).toHaveBeenCalledTimes(1);
    });
});