import * as yup from "yup";
import { JOURNEY_STATUS, LEVEL  } from "../models/enums/index.js";
import { isValidObjectId } from "mongoose";

export const registerJourneySchema = yup.object({
  user_id: yup.string().required().test(
    "is-valid-object-id",
    "User ID is not a valid Object ID",
    value => value && isValidObjectId(value)
  ),
  level: yup.string().oneOf(LEVEL.getValues()).required()
});

export const updateJourneySchema = yup.object({
  status: yup.string().oneOf(JOURNEY_STATUS.getValues()),
});


export const createContributionSchema = yup.object({
  value: yup.number().min(1).positive().required(),
});
