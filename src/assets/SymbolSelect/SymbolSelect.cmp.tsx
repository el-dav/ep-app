import React, { FC, useState, useEffect } from 'react';
import { AutoComplete, Form } from 'antd';

enum ValidationStatus {
  ERROR = 'error',
  WARNING = 'warning',
  DEFAULT = ''
}

const companies = [
  { symbol: 'AAPL', name: 'Apple' },
  { symbol: 'MSFT', name: 'Microsoft' },
  { symbol: 'GOOGL', name: 'Google' },
  { symbol: 'VZ', name: 'Verizen' },
  { symbol: 'MMM', name: '3M' },
  { symbol: 'NFLX', name: 'Netflix' },
  { symbol: 'FB', name: 'Facebook' },
  { symbol: 'TWTR', name: 'Twitter' },
  { symbol: 'AMZN', name: 'Amazon' },
  { symbol: 'EBAY', name: 'Ebay' }
];

type Props = {
  className?: string;
  onSelect: (value: any) => void;
  value?: string;
};

const SymbolSelect: FC<Props> = ({ className, onSelect, value }) => {
  const [dataSource, setDataSource] = useState<string[]>([]);
  const [searchText, setSearchtext] = useState<string>('');
  const [helpText, setHelpText] = useState<string>('');
  const [validationStatus, setValidationStatus] = useState<ValidationStatus>(
    ValidationStatus.DEFAULT
  );

  const setValidationError = (isError: boolean) => {
    setHelpText(isError ? 'Select a valid symbol' : '');
    setValidationStatus(
      isError ? ValidationStatus.ERROR : ValidationStatus.DEFAULT
    );
  };

  const setNoSymbolsFound = () => {
    setHelpText('No symbols found for search');
    setValidationStatus(ValidationStatus.WARNING);
  };

  useEffect(() => {
    setSearchtext(value || '');
  }, [value]);

  const onSearch = (searchValue: string) => {
    setDataSource(
      searchValue
        ? companies
            .filter(
              ({ symbol, name }) =>
                symbol.toLowerCase().indexOf(searchValue.toLowerCase()) !==
                  -1 ||
                name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
            )
            .map(({ symbol }) => symbol)
        : []
    );
  };

  return (
    <Form.Item
      label="Symbol"
      className={`${className || ''}`}
      validateStatus={validationStatus}
      help={helpText}
    >
      <AutoComplete
        value={searchText}
        onSelect={selected => {
          onSelect(selected);
          setValidationError(false);
        }}
        placeholder="Symbol/Company"
        dataSource={dataSource}
        onSearch={onSearch}
        onChange={(text: any) => {
          if (text.length && !dataSource.length) {
            setNoSymbolsFound();
          }
          setSearchtext(text);
        }}
        onBlur={() => {
          if (companies.some(company => company.symbol === searchText)) {
            setValidationError(false);
          } else {
            setValidationError(true);
            setSearchtext('');
          }
        }}
        allowClear
      />
    </Form.Item>
  );
};

export default SymbolSelect;
