import Select from "react-select";

const options = [
    { value: "nairobi", label: "Nairobi" },
    { value: "mombasa", label: "Mombasa" },
    { value: "kisumu", label: "Kisumu" },
    { value: "nakuru", label: "Nakuru" }
];

const LocationSelect = () => {
    return (
        <div>
            <label id="location-label"  className="block text-gray-700 font-semibold mb-1">
                Search Location:
            </label>
            <Select
                options={options}
                id="location-label"
                // aria-labelledby="location-label" // Associate label properly
                className="w-full"
                styles={{
                    control: (base, state) => ({
                        ...base,
                        padding: "1px",
                        borderRadius: "6px",
                        borderColor: state.isFocused ? "rgb(0,0,122)" : "#000000",
                        boxShadow: "none",
                        "&:hover": { borderColor: "rgb(0,0,122)" },
                    }),
                }}
            />
        </div>
    );
};

export default LocationSelect;
