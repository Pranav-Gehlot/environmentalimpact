# Constants (Emission factors in gCO2e per unit)
EMISSION_FACTORS = {
    "electricity": 0.5,  # Example: gCO2e per kWh of electricity
    "gasoline": 2.31,    # Example: gCO2e per mile driven in a gasoline car
    "natural_gas": 1.9,  # Example: gCO2e per cubic meter of natural gas
}

# Function to calculate emissions from electricity usage
def calculate_electricity_emissions(kwh_consumed):
    emission_factor = EMISSION_FACTORS.get("electricity", 0)
    return kwh_consumed * emission_factor

# Function to calculate emissions from gasoline usage
def calculate_gasoline_emissions(miles_driven):
    emission_factor = EMISSION_FACTORS.get("gasoline", 0)
    return miles_driven * emission_factor

# Function to calculate emissions from natural gas usage
def calculate_natural_gas_emissions(cubic_meters):
    emission_factor = EMISSION_FACTORS.get("natural_gas", 0)
    return cubic_meters * emission_factor

# Main function to calculate total emissions
def calculate_total_emissions():
    electricity_consumed = 1000  # kWh
    gasoline_used = 50  # miles
    natural_gas_used = 30  # cubic meters

    electricity_emissions = calculate_electricity_emissions(electricity_consumed)
    gasoline_emissions = calculate_gasoline_emissions(gasoline_used)
    natural_gas_emissions = calculate_natural_gas_emissions(natural_gas_used)

    total_emissions = electricity_emissions + gasoline_emissions + natural_gas_emissions
    return total_emissions

if __name__ == "__main__":
    total_emissions = calculate_total_emissions()
    print(f"Total emissions: {total_emissions} gCO2e")
