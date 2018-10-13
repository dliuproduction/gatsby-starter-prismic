import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const Content = styled.div`
  padding-bottom: 2rem;
  max-width: 760px;
`;

const CodeBlock = ({ input }) => <Content dangerouslySetInnerHTML={{ __html: input.primary.code_block.html }} />;

export default CodeBlock;

CodeBlock.propTypes = {
  input: PropTypes.object.isRequired,
};
