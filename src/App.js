import { HotTable } from "@handsontable/react";
import { HyperFormula } from "hyperformula";
import { registerAllModules } from "handsontable/registry";
import "handsontable/dist/handsontable.full.min.css";

// register Handsontable's modules
registerAllModules();

function App() {
  const data = [...Array(6)].map(() => Array(6).fill(""));
  return (
    <div style={{ width: "auto", height: "100vh" }}>
      <HotTable
        data={data}
        rowHeaders={true}
        colHeaders={true}
        minRows={20}
        minCols={20}
        width="100%"
        height="100%"
        rowHeights={23}
        colWidths={100}
        licenseKey="non-commercial-and-evaluation" // for non-commercial use only
        formulas={{
          engine: HyperFormula,
        }}
        contextMenu
        mergeCells
      />
      <div style={{ margin: "10px 0 10px 10px", padding: 10 }}>
        <h3>Documentation</h3>
        <h4>Addition</h4>
        <p>=SUM(A1:B1)</p>
        <br />
        <h4>Multiplication</h4>
        <p>=SUM(A1*B1)</p>
        <br />
        <h4>Average</h4>
        <p>=AVERAGE(A1:A100)</p>
        <br />
        <h4>Merge Cells</h4>
        <p>{`Select cells => Right Click => Merge Cells`}</p>
        <br />
        <h4>Insert Rows/Columns or Delete Rows/Columns</h4>
        <p>{`Select cells => Right Click => Insert/Delete`}</p>
      </div>
    </div>
  );
}

export default App;
