import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { LIGHT_GRAY, LINE_GRAY } from "../../constants/colors";
import dropdownArrowIcon from "../../icons/dropdownArrow.svg";

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropdown: false
    };

    this.showDropdown = this.showDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  showDropdown(event) {
    event.preventDefault();

    this.setState({ showDropdown: true }, () => {
      document.addEventListener("click", this.closeDropdown);
    });
  }

  closeDropdown(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showDropdown: false }, () => {
        document.removeEventListener("click", this.closeDropdown);
      });
    }
  }

  render() {
    const {
      available,
      currentValue,
      valueOptions,
      handleDropdown
    } = this.props;
    return (
      <div>
        <FirstButton
          available={available}
          onClick={available ? this.showDropdown : ""}
        >
          <FlexDiv>
            <DropdownText>{currentValue}</DropdownText>
            <Icon
              src={dropdownArrowIcon}
              facingUp={this.state.showDropdown}
              alt="dropdownArrowIcon"
            />
          </FlexDiv>
        </FirstButton>
        {this.state.showDropdown ? (
          <Options
            className="dropdown"
            ref={element => {
              this.dropdownMenu = element;
            }}
          >
            {valueOptions.map(option => (
              <div key={`value-${option}`}>
                <OptionsButton
                  key={`button-${option}`}
                  id={`button-${option}`}
                  onClick={event => {
                    handleDropdown(event, option);
                    this.setState({ showDropdown: false }, () => {
                      document.removeEventListener("click", this.closeDropdown);
                    });
                  }}
                >
                  <MenuText id={option}>{option}</MenuText>
                </OptionsButton>
              </div>
            ))}
          </Options>
        ) : null}
      </div>
    );
  }
}

Dropdown.propTypes = {
  available: PropTypes.bool.isRequired,
  currentValue: PropTypes.string.isRequired,
  valueOptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleDropdown: PropTypes.func.isRequired
};

const FirstButton = styled.button`
  padding: 0;
  border-radius: 4px;
  background: ${LIGHT_GRAY};
  margin-right: -6px;
  width: 155px;
  height: 30px;
  ${props => (props.available ? "" : "opacity: 0.3;")}
`;
FirstButton.displayName = "FirstButton";

const FlexDiv = styled.div`
  display: flex;
`;

const Icon = styled.img`
  margin-top: 1px;
  ${props => (props.facingUp ? "transform: rotateX(-180deg);" : "")}
  left: 86%;
  position: relative;
`;
Icon.displayName = "Icon";

const DropdownText = styled.div`
  font-size: 14px;
  line-height: 1.75;
  margin: -3px 0 0 9px;
  position: absolute;
`;
DropdownText.displayName = "DropdownText";

const Options = styled.div`
  width: 155px;
  height: auto;
  padding-top: 10px;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.05);
`;
Options.displayName = "Options";

const OptionsButton = styled.button`
  padding: 0;
  border: none;
  background: transparent;
  width: 100%;
`;
OptionsButton.displayName = "OptionsButton";

const MenuText = styled.div`
  font-size: 14px;
  line-height: 1.75;

  &:hover {
    background-color: ${LINE_GRAY};
  }
`;
MenuText.displayName = "MenuText";

export default Dropdown;
