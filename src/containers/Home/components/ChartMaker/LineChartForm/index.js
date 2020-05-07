// ! Notic: i will not use formik to handle this form.
// ! sHowever, i recommend you guy use formik as it is the best =))
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Table, Button } from "reactstrap";
import * as _ from "lodash";
import TableInput from "components/Form/TableInput";

const Wrapper = styled.div`
  th {
    max-width: 80px !important;
  }
`;

const BtnWrapper = styled.div``;

function LineChartForm(props) {
  const { form, setField, setValues } = props;
  const data = {
    labels: _.get(form, "labels"),
    values: _.get(form, "data"),
  };
  const procData = data.labels.map((label, ind) => ({
    label: label,
    value: _.get(data.values, `${ind}`),
  }));

  const addRow = () => {
    const procLabels = [...data.labels];
    const procValues = [...data.values];
    setValues({
      data: [...procValues, ""],
      labels: [...procLabels, ""],
    });
  };

  const deleteRow = (idx) => {
    const procLabels = [...data.labels].filter((item, index) => index !== idx);
    const procValues = [...data.values].filter((item, index) => index !== idx);
    setValues({
      data: procValues,
      labels: procLabels,
    });
  };

  return (
    <Wrapper>
      <Table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Value</th>
            <th>* Delete</th>
          </tr>
        </thead>
        <tbody>
          {procData.map((item, idx) => (
            <NewRow
              key={`table-row--${idx}`}
              idx={idx}
              itemData={item}
              data={data}
              setField={setField}
              deleteRow={deleteRow}
            />
          ))}
        </tbody>
      </Table>
      <BtnWrapper>
        <Button className="nnqduy-btn--primary" onClick={() => addRow()}>
          + Add
        </Button>
      </BtnWrapper>
    </Wrapper>
  );
}

function NewRow(props) {
  const { itemData, data, setField, deleteRow, idx } = props;
  const handleChangeItemName = (event) => {
    let procValue = [...data.labels];
    procValue[idx] = event.target.value;
    setField("labels", procValue);
  };

  const handleChangeItemValue = (event) => {
    let procValue = [...data.values];
    if (!isNaN(Number(event.target.value))) {
      procValue[idx] = event.target.value;
      setField("data", procValue);
    }
  };

  return (
    <tr>
      <td>
        <TableInput
          onChange={handleChangeItemName}
          value={_.get(itemData, "label")}
          placeholder="Add Item Name"
        />
      </td>
      <td>
        <TableInput
          onChange={handleChangeItemValue}
          value={_.get(itemData, "value")}
          placeholder="Add Value"
        />
      </td>
      <td>
        <BtnWrapper>
          <Button
            className="nnqduy-btn--warning"
            onClick={() => deleteRow(idx)}
          >
            Delete
          </Button>
        </BtnWrapper>
      </td>
    </tr>
  );
}

LineChartForm.propTypes = {
  form: PropTypes.any,
  setField: PropTypes.func,
  setValues: PropTypes.func,
};

NewRow.propTypes = {
  itemData: PropTypes.any,
  data: PropTypes.any,
  setField: PropTypes.func,
  deleteRow: PropTypes.func,
  idx: PropTypes.any,
};

export default React.memo(LineChartForm);
