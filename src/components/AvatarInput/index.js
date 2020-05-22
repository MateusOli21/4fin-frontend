import React, { useRef, useEffect, useState } from 'react';
import { useField } from '@unform/core';

import api from '../../services/api';

import { Container } from './styles';

export default function AvatarInput({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'files[0]',
      clearValue() {
        this.ref.value = '';
        setPreview(null);
      },
      setValue(value) {
        setPreview(value);
      },
    });
  }, [fieldName, registerField]);

  const [fileId, setFileId] = useState(defaultValue);
  const [preview, setPreview] = useState(defaultValue);

  async function handlePreview(e) {
    const data = new FormData();
    data.append('file', e.target.files?.[0]);

    const response = await api.post('files', data);
    const { id, url } = response.data;

    setFileId(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={
            preview || 'https://api.adorable.io/avatars/50/abott@adorable.png'
          }
          alt=""
        />
        <input
          style={{ display: 'none' }}
          type="file"
          accept="image/*"
          ref={inputRef}
          defaultValue={defaultValue}
          onChange={handlePreview}
        />
      </label>
    </Container>
  );
}
