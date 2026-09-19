function convertToInches() {

    let millimetres =
        document.getElementById("millimetres").value;

    let inches =
        millimetres / 25.4;

    document.getElementById("inchResult").innerText =
        millimetres +
        " mm = " +
        inches.toFixed(3) +
        " inches";

}


function convertToMillimetres() {

    let inches =
        document.getElementById("inches").value;

    let millimetres =
        inches * 25.4;

    document.getElementById("millimetreResult").innerText =
        inches +
        " inches = " +
        millimetres.toFixed(2) +
        " mm";

}

function convertToFeet() {

    let metres =
        document.getElementById("metres").value;

    let feet =
        metres * 3.28084;

    document.getElementById("feetResult").innerText =
        metres +
        " metres = " +
        feet.toFixed(3) +
        " feet";

}


function convertToMetres() {

    let feet =
        document.getElementById("feet").value;

    let metres =
        feet / 3.28084;

    document.getElementById("metresResult").innerText =
        feet +
        " feet = " +
        metres.toFixed(3) +
        " metres";

}

function convertToInchesFromCm() {

    let centimetres =
        document.getElementById("centimetres").value;

    let inches =
        centimetres / 2.54;

    document.getElementById("cmInchesResult").innerText =
        centimetres +
        " cm = " +
        inches.toFixed(3) +
        " inches";

}


function convertToCentimetres() {

    let inches =
        document.getElementById("cmInches").value;

    let centimetres =
        inches * 2.54;

    document.getElementById("centimetresResult").innerText =
        inches +
        " inches = " +
        centimetres.toFixed(2) +
        " cm";

}

function convertToMiles() {

    let kilometres =
        document.getElementById("kilometres").value;

    let miles =
        kilometres * 0.621371;

    document.getElementById("milesResult").innerText =
        kilometres +
        " kilometres = " +
        miles.toFixed(3) +
        " miles";

}


function convertToKilometres() {

    let miles =
        document.getElementById("miles").value;

    let kilometres =
        miles * 1.60934;

    document.getElementById("kilometresResult").innerText =
        miles +
        " miles = " +
        kilometres.toFixed(3) +
        " kilometres";

}

function convertToPounds() {

    let kilograms =
        document.getElementById("kilograms").value;

    let pounds =
        kilograms * 2.20462;

    document.getElementById("poundsResult").innerText =
        kilograms +
        " kg = " +
        pounds.toFixed(2) +
        " pounds";

}


function convertToKilograms() {

    let pounds =
        document.getElementById("pounds").value;

    let kilograms =
        pounds / 2.20462;

    document.getElementById("kilogramsResult").innerText =
        pounds +
        " pounds = " +
        kilograms.toFixed(2) +
        " kg";

}

function calculateSteelWeight() {

    let shape =
        document.getElementById("shape").value;

    let density =
        Number(document.getElementById("material").value);

    let length =
        Number(document.getElementById("steelLength").value);

    let weight;


    // Basic length validation

    if (length <= 0) {

        document.getElementById("steelResult").innerText =
            "⚠️ Please enter a valid positive length.";

        return;
    }


    // Sheet / Plate / Flat Bar

    if (shape === "sheet" || shape === "flatbar") {

        let width =
            Number(document.getElementById("steelWidth").value);

        let thickness =
            Number(document.getElementById("steelThickness").value);


        if (width <= 0 || thickness <= 0) {

            document.getElementById("steelResult").innerText =
                "⚠️ Please enter valid positive dimensions.";

            return;
        }


        let volume =
            (length / 1000) *
            (width / 1000) *
            (thickness / 1000);


        weight =
            volume * density;
    }


    // Square Bar

    if (shape === "squarebar") {

        let width =
            Number(document.getElementById("steelWidth").value);


        if (width <= 0) {

            document.getElementById("steelResult").innerText =
                "⚠️ Please enter a valid positive width.";

            return;
        }


        let volume =
            (length / 1000) *
            (width / 1000) *
            (width / 1000);


        weight =
            volume * density;
    }


    // Round Bar

    if (shape === "roundbar") {

        let diameter =
            Number(document.getElementById("steelDiameter").value);


        if (diameter <= 0) {

            document.getElementById("steelResult").innerText =
                "⚠️ Please enter a valid positive diameter.";

            return;
        }


        let radius =
            (diameter / 1000) / 2;


        let lengthMetres =
            length / 1000;


        let volume =
            Math.PI *
            radius *
            radius *
            lengthMetres;


        weight =
            volume * density;
    }


    // RHS

    if (shape === "rhs") {

        let width =
            Number(document.getElementById("steelWidth").value);

        let height =
            Number(document.getElementById("steelHeight").value);

        let thickness =
            Number(document.getElementById("steelThickness").value);


        if (width <= 0 || height <= 0 || thickness <= 0) {

            document.getElementById("steelResult").innerText =
                "⚠️ Please enter valid positive dimensions.";

            return;
        }


        if (thickness * 2 >= width ||
            thickness * 2 >= height) {

            document.getElementById("steelResult").innerText =
                "⚠️ Wall thickness must be less than half the outside width and height.";

            return;
        }


        let outerArea =
            (width / 1000) *
            (height / 1000);


        let innerArea =
            ((width - (2 * thickness)) / 1000) *
            ((height - (2 * thickness)) / 1000);


        let crossSectionArea =
            outerArea - innerArea;


        let volume =
            crossSectionArea *
            (length / 1000);


        weight =
            volume * density;
    }


    // SHS

    if (shape === "shs") {

        let width =
            Number(document.getElementById("steelWidth").value);

        let thickness =
            Number(document.getElementById("steelThickness").value);


        if (width <= 0 || thickness <= 0) {

            document.getElementById("steelResult").innerText =
                "⚠️ Please enter valid positive dimensions.";

            return;
        }


        if (thickness * 2 >= width) {

            document.getElementById("steelResult").innerText =
                "⚠️ Wall thickness must be less than half the outside width.";

            return;
        }


        let outerArea =
            (width / 1000) *
            (width / 1000);


        let innerWidth =
            width - (2 * thickness);


        let innerArea =
            (innerWidth / 1000) *
            (innerWidth / 1000);


        let crossSectionArea =
            outerArea - innerArea;


        let volume =
            crossSectionArea *
            (length / 1000);


        weight =
            volume * density;
    }


    // Pipe

    if (shape === "pipe") {

        let diameter =
            Number(document.getElementById("steelDiameter").value);

        let thickness =
            Number(document.getElementById("steelThickness").value);


        if (diameter <= 0 || thickness <= 0) {

            document.getElementById("steelResult").innerText =
                "⚠️ Please enter valid positive dimensions.";

            return;
        }


        if (thickness * 2 >= diameter) {

            document.getElementById("steelResult").innerText =
                "⚠️ Wall thickness must be less than half the outside diameter.";

            return;
        }


        let outerRadius =
            (diameter / 1000) / 2;


        let innerDiameter =
            diameter - (2 * thickness);


        let innerRadius =
            (innerDiameter / 1000) / 2;


        let outerArea =
            Math.PI *
            outerRadius *
            outerRadius;


        let innerArea =
            Math.PI *
            innerRadius *
            innerRadius;


        let crossSectionArea =
            outerArea - innerArea;


        let volume =
            crossSectionArea *
            (length / 1000);


        weight =
            volume * density;
    }


    // Angle

    if (shape === "angle") {

        let legA =
            Number(document.getElementById("steelLegA").value);

        let legB =
            Number(document.getElementById("steelLegB").value);

        let thickness =
            Number(document.getElementById("steelThickness").value);


        if (legA <= 0 || legB <= 0 || thickness <= 0) {

            document.getElementById("steelResult").innerText =
                "⚠️ Please enter valid positive dimensions.";

            return;
        }


        if (thickness >= legA ||
            thickness >= legB) {

            document.getElementById("steelResult").innerText =
                "⚠️ Thickness must be smaller than both leg widths.";

            return;
        }


        let crossSectionArea =
            (legA * thickness) +
            (legB * thickness) -
            (thickness * thickness);


        let volume =
            (crossSectionArea / 1000000) *
            (length / 1000);


        weight =
            volume * density;
    }


    // Display result

    let material =
    document.getElementById("material").options[
        document.getElementById("material").selectedIndex
    ].text;

    let shapeName =
        document.getElementById("shape").options[
            document.getElementById("shape").selectedIndex
        ].text;


    document.getElementById("steelResult").innerText =
        material +
        " — " +
        shapeName +
        "\nApproximate weight: " +
        weight.toFixed(2) +
        " kg";
}


function updateSteelShape() {

    let shape =
        document.getElementById("shape").value;

    let dimensions =
        document.getElementById("dimensions");


    if (shape === "sheet") {

        dimensions.innerHTML = `

            <label for="steelLength">
                <strong>Length (mm)</strong>
            </label>

            <br>

            <input
                type="number"
                id="steelLength"
                placeholder="e.g. 3000"
            >

            <br>


            <label for="steelWidth">
                <strong>Width (mm)</strong>
            </label>

            <br>

            <input
                type="number"
                id="steelWidth"
                placeholder="e.g. 1500"
            >

            <br>


            <label for="steelThickness">
                <strong>Thickness (mm)</strong>
            </label>

            <br>

            <input
                type="number"
                id="steelThickness"
                placeholder="e.g. 1.6"
            >

        `;

    }


    if (shape === "roundbar") {

        dimensions.innerHTML = `

            <label for="steelLength">
                <strong>Length (mm)</strong>
            </label>

            <br>

            <input
                type="number"
                id="steelLength"
                placeholder="e.g. 3000"
            >

            <br>


            <label for="steelDiameter">
                <strong>Diameter (mm)</strong>
            </label>

            <br>

            <input
                type="number"
                id="steelDiameter"
                placeholder="e.g. 25"
            >

        `;

    }

        // Flat Bar

    if (shape === "flatbar") {

        dimensions.innerHTML = `

            <label for="steelLength">
                <strong>Length (mm)</strong>
            </label>

            <br>

            <input
                type="number"
                id="steelLength"
                placeholder="e.g. 3000"
            >

            <br>


            <label for="steelWidth">
                <strong>Width (mm)</strong>
            </label>

            <br>

            <input
                type="number"
                id="steelWidth"
                placeholder="e.g. 50"
            >

            <br>


            <label for="steelThickness">
                <strong>Thickness (mm)</strong>
            </label>

            <br>

            <input
                type="number"
                id="steelThickness"
                placeholder="e.g. 6"
            >

        `;

    }

        // Square Bar

    if (shape === "squarebar") {

        dimensions.innerHTML = `

            <label for="steelLength">
                <strong>Length (mm)</strong>
            </label>

            <br>

            <input
                type="number"
                id="steelLength"
                placeholder="e.g. 3000"
            >

            <br>


            <label for="steelWidth">
                <strong>Width (mm)</strong>
            </label>

            <br>

            <input
                type="number"
                id="steelWidth"
                placeholder="e.g. 25"
            >

        `;

    }

        // RHS

    if (shape === "rhs") {

        dimensions.innerHTML = `

            <label for="steelLength">
                <strong>Length (mm)</strong>
            </label>

            <br>

            <input
                type="number"
                id="steelLength"
                placeholder="e.g. 6000"
            >

            <br>


            <label for="steelWidth">
                <strong>Outside Width (mm)</strong>
            </label>

            <br>

            <input
                type="number"
                id="steelWidth"
                placeholder="e.g. 100"
            >

            <br>


            <label for="steelHeight">
                <strong>Outside Height (mm)</strong>
            </label>

            <br>

            <input
                type="number"
                id="steelHeight"
                placeholder="e.g. 50"
            >

            <br>


            <label for="steelThickness">
                <strong>Wall Thickness (mm)</strong>
            </label>

            <br>

            <input
                type="number"
                id="steelThickness"
                placeholder="e.g. 3"
            >

        `;

    }

        // SHS

    if (shape === "shs") {

        dimensions.innerHTML = `

            <label for="steelLength">
                <strong>Length (mm)</strong>
            </label>

            <br>

            <input
                type="number"
                id="steelLength"
                placeholder="e.g. 6000"
            >

            <br>


            <label for="steelWidth">
                <strong>Outside Width (mm)</strong>
            </label>

            <br>

            <input
                type="number"
                id="steelWidth"
                placeholder="e.g. 50"
            >

            <br>


            <label for="steelThickness">
                <strong>Wall Thickness (mm)</strong>
            </label>

            <br>

            <input
                type="number"
                id="steelThickness"
                placeholder="e.g. 3"
            >

        `;

    }

        // Pipe

    if (shape === "pipe") {

        dimensions.innerHTML = `

            <label for="steelLength">
                <strong>Length (mm)</strong>
            </label>

            <br>

            <input
                type="number"
                id="steelLength"
                placeholder="e.g. 6000"
            >

            <br>


            <label for="steelDiameter">
                <strong>Outside Diameter (mm)</strong>
            </label>

            <br>

            <input
                type="number"
                id="steelDiameter"
                placeholder="e.g. 50"
            >

            <br>


            <label for="steelThickness">
                <strong>Wall Thickness (mm)</strong>
            </label>

            <br>

            <input
                type="number"
                id="steelThickness"
                placeholder="e.g. 3"
            >

        `;

    }

    // Angle

    if (shape === "angle") {

        dimensions.innerHTML = `

            <label for="steelLength">
                <strong>Length (mm)</strong>
            </label>

            <br>

            <input
                type="number"
                id="steelLength"
                placeholder="e.g. 3000"
            >

            <br>


            <label for="steelLegA">
                <strong>Leg Width A (mm)</strong>
            </label>

            <br>

            <input
                type="number"
                id="steelLegA"
                placeholder="e.g. 50"
            >

            <br>


            <label for="steelLegB">
                <strong>Leg Width B (mm)</strong>
            </label>

            <br>

            <input
                type="number"
                id="steelLegB"
                placeholder="e.g. 50"
            >

            <br>


            <label for="steelThickness">
                <strong>Thickness (mm)</strong>
            </label>

            <br>

            <input
                type="number"
                id="steelThickness"
                placeholder="e.g. 5"
            >

        `;

    }
}