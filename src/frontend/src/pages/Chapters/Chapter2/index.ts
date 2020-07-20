/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore
import course from "!raw-loader!./course.md";
/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore
import exercise from "!raw-loader!./exercise.md";
/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore
import solution from "!raw-loader!./solution.md";
/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore
import test from "!raw-loader!./test.md";

export const data = { course, exercise, solution, supports: { test } };
