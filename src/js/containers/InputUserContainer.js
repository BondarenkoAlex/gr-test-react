import React, {
    Component,
    PropTypes,
} from 'react';
import {
    Row,
    Col,
    Button,
    ButtonToolbar,
    Form,
    FormGroup,
    ControlLabel,
    FormControl,
} from 'react-bootstrap';

import validation from 'react-validation-mixin';
import strategy from 'react-validatorjs-strategy';

class InputUserContainer extends Component {
    constructor(props, context) {
        super(props, context);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.validationStrategy();
        this.state = {
            user: this.props.user,
        }
    }

    validationStrategy() {
        const required      = "обязательно для заполнения";
        this.validatorTypes = strategy.createSchema(
            {
                fullName     : 'required|max:100',
                birthdayYear : 'required',
                birthdayMonth: 'required',
                birthdayDay  : 'required',
                phone        : 'regex:/\\+7\\(\\d{3}\\)\\d{3}-\\d{2}-\\d{2}/',
            }, {
                "required.fullName"     : `Поле ФИО ${required}.`,
                "min.fullName"          : `Количество символов в поле ФИО не может превышать :max.`,
                "required.birthdayYear" : `Поле год рождения ${required}.`,
                "required.birthdayMonth": `Поле месяц рождения ${required}.`,
                "required.birthdayDay"  : `Поле день рождения ${required}.`,
                "regex.phone"           : 'Неверный формат поля телефон. Верный формат: +7(916)111-22-33',
            }
        );
    }

    getValidatorData() {
        return this.state.user;
    }

    onSubmit(e) {
        e.preventDefault();
        let {
                onSubmit
            } = this.props;
        this.props.validate((error)=> {
            if (!error) {
                onSubmit(this.state.user);
                this.onCancel();
            }
        });
    };

    onCancel() {
        let {
                user
            } = this.props;
        debugger;
        this.setState({
            ...this.state,
            user,
        });
        this.props.clearValidations();
    }

    onChange(name, value) {
        this.setState({
            ...this.state,
            user: {
                ...this.state.user,
                [name]: value,
            },
        });
        this.props.clearValidations();
    };

    render() {
        let {
                user,
                onCancel,
            } = this.state;

        return (
            <Form horizontal onSubmit={this.onSubmit}>
                <FormGroup
                    controlId="fullName"
                    validationState={(this.props.getValidationMessages('fullName').length > 0)
                        ? "error"
                        : null}>
                    <Col componentClass={ControlLabel} sm={3}>
                        ФИО
                    </Col>
                    <Col sm={9}>
                        <FormControl
                            type="text"
                            placeholder="Иванов Иван Иванович"
                            value={user.fullName}
                            onChange={(e)=>this.onChange("fullName", e.target.value)}
                        />
                        <div>
                            <small>{this.props.getValidationMessages('fullName')}</small>
                        </div>
                    </Col>
                </FormGroup>
                <FormGroup
                    controlId="birthday"
                    validationState={(this.props.getValidationMessages('birthdayYear').length > 0
                    || this.props.getValidationMessages('birthdayMonth').length > 0
                    || this.props.getValidationMessages('birthdayDay').length > 0)
                        ? "error"
                        : null}
                >
                    <Col componentClass={ControlLabel} sm={3}>
                        Дата рождения
                    </Col>
                    <Col sm={3}>
                        <FormControl
                            componentClass="select"
                            placeholder="select"
                            value={user.birthdayYear || -1}
                            onChange={(e)=>this.onChange("birthdayYear", e.target.value)}
                        >
                            <option>...Год</option>
                            {
                                Array.from({length: 58})
                                    .map((item, i) => <option key={`y-${i}`}>{1960 + i}</option>)
                            }
                        </FormControl>
                    </Col>
                    <Col sm={3}>
                        <FormControl
                            componentClass="select"
                            placeholder="select"
                            value={user.birthdayMonth || -1}
                            onChange={(e)=>this.onChange("birthdayMonth", e.target.value)}
                        >
                            <option>...Месяц</option>
                            {
                                Array.from({length: 12})
                                    .map((item, i) => <option key={`m-${i}`}>{i + 1}</option>)
                            }
                        </FormControl>
                    </Col>
                    <Col sm={3}>
                        <FormControl
                            componentClass="select"
                            placeholder="select"
                            value={user.birthdayDay || -1}
                            onChange={(e)=>this.onChange("birthdayDay", e.target.value)}
                        >
                            <option>...День</option>
                            {
                                Array.from({length: 31})
                                    .map((item, i) => <option key={`d-${i}`}>{i + 1}</option>)
                            }
                        </FormControl>
                    </Col>
                    <Col smOffset={3} sm={9}>
                        <div>
                            <small>{this.props.getValidationMessages('birthdayYear')}</small>
                        </div>
                        <div>
                            <small>{this.props.getValidationMessages('birthdayMonth')}</small>
                        </div>
                        <div>
                            <small>{this.props.getValidationMessages('birthdayDay')}</small>
                        </div>
                    </Col>
                </FormGroup>
                <FormGroup controlId="address">
                    <Col componentClass={ControlLabel} sm={3}>
                        Адрес
                    </Col>
                    <Col sm={9}>
                        <FormControl
                            type="text"
                            placeholder="ул. Большая ордынка 45"
                            value={user.address}
                            onChange={(e)=>this.onChange("address", e.target.value)}
                        />
                    </Col>
                </FormGroup>
                <FormGroup controlId="address">
                    <Col componentClass={ControlLabel} sm={3}>
                        Город
                    </Col>
                    <Col sm={9}>
                        <FormControl
                            type="text"
                            placeholder="Москва"
                            value={user.city}
                            onChange={(e)=>this.onChange("city", e.target.value)}
                        />
                    </Col>
                </FormGroup>
                <FormGroup
                    controlId="address"
                    validationState={(this.props.getValidationMessages('phone').length > 0)
                        ? "error"
                        : null}>
                    <Col componentClass={ControlLabel} sm={3}>
                        Телефон
                    </Col>
                    <Col sm={9}>
                        <FormControl
                            type="text"
                            placeholder="+7(916)987-65-43"
                            value={user.phone}
                            onChange={(e)=>this.onChange("phone", e.target.value)}
                        />
                        <div>
                            <small>{this.props.getValidationMessages('phone')}</small>
                        </div>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col smOffset={3} sm={9}>
                        <ButtonToolbar className="pull-center">
                            <Button onClick={this.onCancel}>Сброс</Button>
                            {this.props.children}
                        </ButtonToolbar>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

InputUserContainer.propTypes    = {
    user    : PropTypes.object,
    onSubmit: PropTypes.func,
};
InputUserContainer.defaultProps = {};

export default validation(strategy)(InputUserContainer);

