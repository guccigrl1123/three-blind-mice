  
let locations = []

export const useLocations = () => {
    return locations.slice()
}

export const getLocations = () => {
    return fetch("http://localhost:8000/locations")
        .then(response => response.json())
        .then(
            (parsedLocations) => {
                locations = parsedLocations
            }
        )
}