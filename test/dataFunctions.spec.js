import { analyticPhilosopherStats, filterData, womenPhilosophersStats, philosophersBeforeXIXStats, sortData } from "../src/dataFunctions.js";
import { data as fakeData } from "./data.js";

describe("filterData function", () => {
  it("should filter philosophers by branchOfPhilosopher and returns the quantity of them", () => {
    const result = filterData(
      fakeData,
      "branchOfPhilosophy",
      "Teología"
    );
    expect(result.length).toBe(1);
  });
});
it("should filter philosophers by branchOfPhilosopher and returns the quantity of them", () => {
  const result = filterData(
    fakeData,
    "branchOfPhilosophy",
    "Existencialismo"
  ); expect(result.length).toBe(1);
});
it("should filter philosophers by branchOfPhilosopher and returns the quantity of them", () => {
  const result = filterData(fakeData, "branchOfPhilosophy", "Ética");
  expect(result.length).toBe(8);
});
it("should filter philosophers by branchOfPhilosopher and returns the quantity of them", () => {
  const result = filterData(
    fakeData,
    "branchOfPhilosophy",
    "Epistemología"
  );
  expect(result.length).toBe(5);
});
it("should filters philosophers by classification and returns the quantity of them", () => {
  const result = filterData(
    fakeData,
    "classification",
    "Filosofía analítica"
  );
  expect(result.length).toBe(2);
});
describe("womenStats function", ()=>{
  it("should return the quantity of women philosophers", ()=>{
    const result = Number(womenPhilosophersStats(fakeData))
    ;
    expect(result).toBe(8.33)
  })
})
describe("analyticPhilosophers function", ()=>{
  it("should return the quantity of analytic philosophers", ()=>{
    const result = Number(analyticPhilosopherStats(fakeData))
    expect(result).toBe(16.67)
  })
})
describe("philosophersBeforeXIXStats function", ()=>{
  it("should return the quantity of philosophers born before 1800",()=>{
    const result = Number(philosophersBeforeXIXStats(fakeData))
    expect(result).toBe(87.50)
  })
})
describe("sortData function",()=>{
  it("should return the philosophers sorted in asc order according to their century", ()=>{
    const result = sortData(fakeData, "century", "asc")
    for(let i=0; i<fakeData.length-1; i++){
      expect(result[i].facts.century<=result[i+1].facts.century).toBe(true)
    }
  })
})
describe("sortData function",()=>{
  it("should return the philosophers sorted in asc order according to their century", ()=>{
    const result = sortData(fakeData, "century", "desc")
    for(let i=0; i<result.length-1; i++){
      expect(result[i].facts.century>=result[i+1].facts.century).toBe(true)
    }
  })
})
