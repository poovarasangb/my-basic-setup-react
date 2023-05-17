import "scss/seats.scss";
import { useCallback, useState } from "react";

const MAX_SELECTION_SEAT = 7;
const numRows = 6;
const numColumns = 10;

const seatArrangement = Array.from({ length: numRows }, (_, row) =>
    Array.from({ length: numColumns }, (_, col) => String.fromCharCode(65 + row) + (col + 1))
);

const Seat = ({value, onClick, isSelected}) => {
    const handleSeatSelection = useCallback(() => {
        onClick(value);
    }, [value, onClick]);

    const getClassName = useCallback(() => {
        let className = "seat";
        if (isSelected) {
            className += " isSelected";
        }
        return className;
    }, [isSelected]);

    return (
        <span
            onClick={handleSeatSelection}
            className={getClassName()}
        >
            <span className="text">
                {value}
            </span>
        </span>
    );
};

const Seats = () => {
    const [selectedSeats, setSelectedSeats] = useState(new Set());

    const handleSeatSelection = useCallback((value) => {
        let _seats = new Set(selectedSeats);
        if (_seats.has(value)){
            _seats.delete(value);
        } else {
            if (_seats.size === MAX_SELECTION_SEAT){
                const [, ...remainingSeats] = _seats;
                _seats.clear();
                remainingSeats.forEach((seat) => _seats.add(seat));
            }
            _seats.add(value);
        }
        setSelectedSeats(_seats);
    }, [selectedSeats]);

    const renderSeats = useCallback(() =>
        seatArrangement.map((row, rowIndex) =>
            <div className="rowSeats" key={rowIndex}>
                {
                    row.map((value, i) => (
                        <Seat
                            value={value}
                            isSelected={selectedSeats.has(value)}
                            key={i}
                            onClick={handleSeatSelection}
                        />
                    ))
                }
            </div>)
    , [handleSeatSelection, selectedSeats]);

    return (
        <div className="background" >
            {renderSeats()}
        </div>

    );
};

export default Seats;