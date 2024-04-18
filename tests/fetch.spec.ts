import { get, postJson } from "../src/fetch";

interface ResJson {
	headers: {
		"content-type": string;
	},
	json: {
		hello: "world";
	},
	args: {
		hello: "world";
	},
	url: string;
}
describe("fetch", () => {
	describe("postJson", () => {
		it("Should send JSON", () => {
			return postJson("https://postman-echo.com/post", { hello: "world" })
				.then(async (res) => {
					const result = await res.json() as ResJson;
					expect(result.headers["content-type"]).toEqual("application/json");
					expect(result.json).toEqual({ hello: "world" });
				});
		});
	});

	describe("get", () => {
		it("Should make request with query string", () => {
			return get("https://postman-echo.com/get", { hello: "world" })
				.then(async (res) => {
					const result = await res.json() as ResJson;

					expect(result.args).toEqual({ hello: "world" });
					expect(result.url).toEqual("https://postman-echo.com/get?hello=world");
				});
		});

		it("Should make request without query string with empty", () => {
			return get("https://postman-echo.com/get", {})
				.then(async (res) => {
					const result = await res.json() as ResJson;

					expect(result.args).toEqual({});
					// Should be no trailing ?
					expect(result.url).toEqual("https://postman-echo.com/get");
				});
		});

		it("Should make request without query string without param", () => {
			return get("https://postman-echo.com/get")
				.then(async (res) => {
					const result = await res.json() as ResJson;

					expect(result.args).toEqual({});
					// Should be no trailing ?
					expect(result.url).toEqual("https://postman-echo.com/get");
				});
		});
	});
});
