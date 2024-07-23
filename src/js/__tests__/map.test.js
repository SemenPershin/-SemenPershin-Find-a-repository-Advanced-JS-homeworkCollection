import { ErrorRepository } from "../map";

test("Получение существущей ошибки", () => {
    const errorsRepository = new ErrorRepository();

    expect(errorsRepository.translate(1)).toBe("неправильный пароль");
})

test("Получение несуществущей ошибки", () => {
    const errorsRepository = new ErrorRepository();

    expect(errorsRepository.translate(3)).toBe('Unknown error');
})