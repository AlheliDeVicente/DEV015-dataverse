import {filterData, sortData, womenPhilosophersStats, philosophersBeforeXIXStats, analyticPhilosopherStats} from "../src/dataFunctions.js";
import { data as fakeData } from "./data.js";
describe('filterData function', () => {
  it('should return the quantity of philosophersByClassification', () => {
    const analitics = filterData(fakeData, "classification", "Filosofía analítica")
    const continentals = filterData(fakeData, "classification", "Filosofía continental")
    expect(analitics.length).toBe(2);
    expect (continentals.length).toBe(10);
  });
  it("should return the id of the teology philosophers", ()=>{
    const teology = filterData(fakeData, "branchOfPhilosophy", "Teología")
    expect(teology.length).toBe(1)
  });
  it("should return the quantity of epistemology philosophers", ()=>{
    const epistemology = filterData(fakeData, "branchOfPhilosophy", "Epistemología")
    expect(epistemology.length).toBe(4)
  });
  it("should return the id of ethics philosophers", ()=>{
    const ethics = filterData(fakeData,"branchOfPhilsophy", "Ética")
    expect(ethics.id).toEqual["platon", "david_hume","immanuel_kant", "baruch_spinoza", "epicuro"]
  });
  it("should return the name of the metaphysics philosophers", ()=>{
    const metaphysics = filterData(fakeData, "branchOfPhilosophy", "Metafísica")
    expect(metaphysics.name).toEqual["Platón", "Averroes", "Parménides", "Giordano Bruno", "Baruch Spinoza"]
  });
  it("should return philosopher with the name selected", ()=>{
    const platon = filterData(fakeData, "name", "Platón")
    expect(platon[0].name).toBe("Platón")
  });
  it("should return the total of philosophers by type",()=>{
    const existencialismo = filterData(fakeData, "typeOfPhilosophy", "Existencialismo");
    const escolastica = filterData(fakeData, "typeOfPhilosophy", "Escolástica");
    const idealismoAleman = filterData(fakeData, "typeOfPhilosophy","Idealismo alemán");
    const idealismo = filterData(fakeData, "typeOfPhilosophy", "Idealismo");
    const empirismo = filterData(fakeData, "typeOfPhilosophy", "Empirismo");
    expect(existencialismo.length).toBe(1);
    expect(escolastica.length).toBe(1);
    expect(idealismo.length).toBe(1);
    expect(idealismoAleman.length).toBe(1);
    expect(empirismo.length).toBe(1);
  });
});
describe("sortData function", ()=>{
  it("should return the array sorted asc by century", ()=>{
    const asc = sortData(fakeData, "century", "asc")
    for(let i=0;i<fakeData.length-1;i++){
      expect(asc[i].facts.century<=asc[i+1].facts.century).toBe(true)
    }
  });
  it("should return the array sorted desc by century", ()=>{
    const desc = sortData(fakeData, "century", "desc")
    for(let i=0; i<fakeData.length-1;i++){
      expect(desc[i].facts.century>desc[i+1].facts.century).toBe(true)
    }
  });
});
describe("computeStats function", ()=>{
  it("should return all stats", ()=>{
    const womenPhilosophers = Number(womenPhilosophersStats(fakeData))
    const philosophersBeforeXIX = Number(philosophersBeforeXIXStats(fakeData))
    const analyticPhilosophers = Number(analyticPhilosopherStats(fakeData))
    expect(womenPhilosophers).toBe(8.33)
    expect(philosophersBeforeXIX).toBe(83.33)
    expect(analyticPhilosophers).toBe(16.67)
  })
})