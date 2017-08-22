import React from "react";
import { Pager, Button } from "react-bootstrap";

const PagerSet = ({ page, renderPage }) =>
  <Pager>
    <Pager.Item previous="true" onClick={renderPage(page - 1)}>
      Previous
    </Pager.Item>
    <Button bsStyle="primary" bsSize="large">
      &nbsp;{page}&nbsp;
    </Button>
    <Pager.Item next="true" onClick={renderPage(page + 1)}>
      Next
    </Pager.Item>
  </Pager>;

export default PagerSet;
