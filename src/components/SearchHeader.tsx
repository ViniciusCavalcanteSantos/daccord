"use client";

import styled from "styled-components";
import SearchIcon from "./icons/SearchIcon";
import { useState } from "react";

interface PlaceholderProps {
  visible: number
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2C2F48;
  width: 100%;
  min-height: 44px;
`

const InputLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.20);
  background: linear-gradient(180deg, rgba(46, 51, 90, 0.30) 0%, rgba(28, 27, 51, 0.30) 100%);
  height: 24px;
  width: 100%;
  max-width: 442px;
`

const Placeholder = styled.div<PlaceholderProps>`
  position: absolute;
  display: flex;
  align-items: center;
  color: #FFF;
  text-align: center;
  font-size: 13px;
  pointer-events: none;
  opacity: ${({ visible }) => visible ? "1" : "0"};

  > svg {
    margin-right: 4px;
  }
`

const Input = styled.input`
  width: 100%;
  height: 100%;
  background: none;
  outline: none;
  border: none;
  color: #fff;
  padding: 0 8px;
`

const SearchHeader = () => {
  const [search, setSearch] = useState("");
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const handleFocus = () => {
    setShowPlaceholder(false)
  }

  const handleBlur = () => {
    if(!search) {
      setShowPlaceholder(true);
    }
  }

  return (
    <Container>
      <InputLabel>
        <Placeholder visible={+showPlaceholder}>
          <SearchIcon />

          Explore
        </Placeholder>

        <Input type="text" onChange={e => setSearch(e.target.value)} onFocus={handleFocus} onBlur={handleBlur}/>
      </InputLabel>
    </Container>
  )
}

export default SearchHeader