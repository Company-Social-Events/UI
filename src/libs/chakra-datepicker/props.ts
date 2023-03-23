export interface CalendarProps {
    triggerButton?: React.ReactNode;
    triggerButtonText?: string;
    time?: boolean;
    initialValue?: Date;
    onDateChange?: (date: Date | null) => void;
    canPickYear? : boolean;
}