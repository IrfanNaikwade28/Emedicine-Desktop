import { useState } from "preact/hooks";
import { HealthCheckupCard } from "./healthCheckupCard";
export const PopularHealthCheckup = () => {
  const [healthOption, setHealthOption] = useState("opt1");
  return (
    <>
      <div className="flex w-full justify-center mt-20">
        <div className="w-3/4 flex flex-col gap-y-5">
          <div className="text-xl font-bold">Popular health checkups</div>
          <div className="health-options w-full flex justify-between">
            <div className="health-options-container flex gap-x-3">
              <div
                className={`option text-exs text-nowrap font-medium border border-[#757575] py-2 px-4 rounded-full cursor-pointer ${
                  healthOption === "opt1"
                    ? "text-white bg-[#757575]"
                    : "text-[#757575] bg-white"
                }`}
                onClick={() => setHealthOption("opt1")}
              >
                Popular Packages
              </div>
              <div
                className={`option text-exs text-nowrap font-medium border border-[#757575] py-2 px-4 rounded-full cursor-pointer ${
                  healthOption === "opt2"
                    ? "text-white bg-[#757575]"
                    : "text-[#757575] bg-white"
                }`}
                onClick={() => setHealthOption("opt2")}
              >
                Fever
              </div>
              <div
                className={`option text-exs text-nowrap font-medium border border-[#757575] py-2 px-4 rounded-full cursor-pointer ${
                  healthOption === "opt3"
                    ? "text-white bg-[#757575]"
                    : "text-[#757575] bg-white"
                }`}
                onClick={() => setHealthOption("opt3")}
              >
                Women Health
              </div>
              <div
                className={`option text-exs text-nowrap font-medium border border-[#757575] py-2 px-4 rounded-full cursor-pointer ${
                  healthOption === "opt4"
                    ? "text-white bg-[#757575]"
                    : "text-[#757575] bg-white"
                }`}
                onClick={() => setHealthOption("opt4")}
              >
                Diabetes
              </div>
              <div
                className={`option text-exs text-nowrap font-medium border border-[#757575] py-2 px-4 rounded-full cursor-pointer ${
                  healthOption === "opt5"
                    ? "text-white bg-[#757575]"
                    : "text-[#757575] bg-white"
                }`}
                onClick={() => setHealthOption("opt5")}
              >
                Fitness
              </div>
              <div
                className={`option text-exs text-nowrap font-medium border border-[#757575] py-2 px-4 rounded-full cursor-pointer ${
                  healthOption === "opt6"
                    ? "text-white bg-[#757575]"
                    : "text-[#757575] bg-white"
                }`}
                onClick={() => setHealthOption("opt6")}
              >
                Covid 19
              </div>
              <div
                className={`option text-exs text-nowrap font-medium border border-[#757575] py-2 px-4 rounded-full cursor-pointer ${
                  healthOption === "opt7"
                    ? "text-white bg-[#757575]"
                    : "text-[#757575] bg-white"
                }`}
                onClick={() => setHealthOption("opt7")}
              >
                Senior citizen
              </div>
              <div
                className={`option text-exs text-nowrap font-medium border border-[#757575] py-2 px-4 rounded-full cursor-pointer ${
                  healthOption === "opt8"
                    ? "text-white bg-[#757575]"
                    : "text-[#757575] bg-white"
                }`}
                onClick={() => setHealthOption("opt8")}
              >
                Full body checkup
              </div>
              <div
                className={`option text-exs text-nowrap font-medium border border-[#757575] py-2 px-4 rounded-full cursor-pointer ${
                  healthOption === "opt9"
                    ? "text-white bg-[#757575]"
                    : "text-[#757575] bg-white"
                }`}
                onClick={() => setHealthOption("opt9")}
              >
                Pregnancy
              </div>
            </div>
            <div className="text-sm font-bold uppercase text-red-500">
              View All
            </div>
          </div>
          <div className="w-full flex gap-x-5 overflow-x-scroll hideScroll">
            <HealthCheckupCard
              selType={healthOption}
              type="opt1"
              title="Comprehensive Gold Full Body Checkup with Smart Report"
              testCount="Includes 88 tests"
              serum1="Serum Calcium<"
              serum2="Serum Iron Studies Basic"
              serum3="Vitamin Profile"
              reportTime="24 hours"
              discPrice="2249"
              actualPrice="4498"
            />
            <HealthCheckupCard
              selType={healthOption}
              type="opt1"
              title="Comprehensive Gold Full Body Checkup with Smart Report"
              testCount="Includes 88 tests"
              serum1="Serum Calcium<"
              serum2="Serum Iron Studies Basic"
              serum3="Vitamin Profile"
              reportTime="24 hours"
              discPrice="2249"
              actualPrice="4498"
            />
            <HealthCheckupCard
              selType={healthOption}
              type="opt1"
              title="Comprehensive Gold Full Body Checkup with Smart Report"
              testCount="Includes 88 tests"
              serum1="Serum Calcium<"
              serum2="Serum Iron Studies Basic"
              serum3="Vitamin Profile"
              reportTime="24 hours"
              discPrice="2249"
              actualPrice="4498"
            />
            <HealthCheckupCard
              selType={healthOption}
              type="opt2"
              title="Comprehensive Gold Full Body Checkup with Smart Report"
              testCount="Includes 88 tests"
              serum1="Serum Calcium<"
              serum2="Serum Iron Studies Basic"
              serum3="Vitamin Profile"
              reportTime="24 hours"
              discPrice="2249"
              actualPrice="4498"
            />
            <HealthCheckupCard
              selType={healthOption}
              type="opt1"
              title="Comprehensive Gold Full Body Checkup with Smart Report"
              testCount="Includes 88 tests"
              serum1="Serum Calcium<"
              serum2="Serum Iron Studies Basic"
              serum3="Vitamin Profile"
              reportTime="24 hours"
              discPrice="2249"
              actualPrice="4498"
            />
            <HealthCheckupCard
              selType={healthOption}
              type="opt1"
              title="Comprehensive Gold Full Body Checkup with Smart Report"
              testCount="Includes 88 tests"
              serum1="Serum Calcium<"
              serum2="Serum Iron Studies Basic"
              serum3="Vitamin Profile"
              reportTime="24 hours"
              discPrice="2249"
              actualPrice="4498"
            />
            <HealthCheckupCard
              selType={healthOption}
              type="opt4"
              title="Comprehensive Gold Full Body Checkup with Smart Report"
              testCount="Includes 88 tests"
              serum1="Serum Calcium<"
              serum2="Serum Iron Studies Basic"
              serum3="Vitamin Profile"
              reportTime="24 hours"
              discPrice="2249"
              actualPrice="4498"
            />
            <HealthCheckupCard
              selType={healthOption}
              type="opt3"
              title="Comprehensive Gold Full Body Checkup with Smart Report"
              testCount="Includes 88 tests"
              serum1="Serum Calcium<"
              serum2="Serum Iron Studies Basic"
              serum3="Vitamin Profile"
              reportTime="24 hours"
              discPrice="2249"
              actualPrice="4498"
            />
            <HealthCheckupCard
              selType={healthOption}
              type="opt3"
              title="Comprehensive Gold Full Body Checkup with Smart Report"
              testCount="Includes 88 tests"
              serum1="Serum Calcium<"
              serum2="Serum Iron Studies Basic"
              serum3="Vitamin Profile"
              reportTime="24 hours"
              discPrice="2249"
              actualPrice="4498"
            />
            <HealthCheckupCard
              selType={healthOption}
              type="opt2"
              title="Comprehensive Gold Full Body Checkup with Smart Report"
              testCount="Includes 88 tests"
              serum1="Serum Calcium<"
              serum2="Serum Iron Studies Basic"
              serum3="Vitamin Profile"
              reportTime="24 hours"
              discPrice="2249"
              actualPrice="4498"
            />
            <HealthCheckupCard
              selType={healthOption}
              type="opt3"
              title="Comprehensive Gold Full Body Checkup with Smart Report"
              testCount="Includes 88 tests"
              serum1="Serum Calcium<"
              serum2="Serum Iron Studies Basic"
              serum3="Vitamin Profile"
              reportTime="24 hours"
              discPrice="2249"
              actualPrice="4498"
            />
            <HealthCheckupCard
              selType={healthOption}
              type="opt4"
              title="Comprehensive Gold Full Body Checkup with Smart Report"
              testCount="Includes 88 tests"
              serum1="Serum Calcium<"
              serum2="Serum Iron Studies Basic"
              serum3="Vitamin Profile"
              reportTime="24 hours"
              discPrice="2249"
              actualPrice="4498"
            />
            <HealthCheckupCard
              selType={healthOption}
              type="opt5"
              title="Comprehensive Gold Full Body Checkup with Smart Report"
              testCount="Includes 88 tests"
              serum1="Serum Calcium<"
              serum2="Serum Iron Studies Basic"
              serum3="Vitamin Profile"
              reportTime="24 hours"
              discPrice="2249"
              actualPrice="4498"
            />
            <HealthCheckupCard
              selType={healthOption}
              type="opt6"
              title="Comprehensive Gold Full Body Checkup with Smart Report"
              testCount="Includes 88 tests"
              serum1="Serum Calcium<"
              serum2="Serum Iron Studies Basic"
              serum3="Vitamin Profile"
              reportTime="24 hours"
              discPrice="2249"
              actualPrice="4498"
            />
            <HealthCheckupCard
              selType={healthOption}
              type="opt5"
              title="Comprehensive Gold Full Body Checkup with Smart Report"
              testCount="Includes 88 tests"
              serum1="Serum Calcium<"
              serum2="Serum Iron Studies Basic"
              serum3="Vitamin Profile"
              reportTime="24 hours"
              discPrice="2249"
              actualPrice="4498"
            />
            <HealthCheckupCard
              selType={healthOption}
              type="opt5"
              title="Comprehensive Gold Full Body Checkup with Smart Report"
              testCount="Includes 88 tests"
              serum1="Serum Calcium<"
              serum2="Serum Iron Studies Basic"
              serum3="Vitamin Profile"
              reportTime="24 hours"
              discPrice="2249"
              actualPrice="4498"
            />
            <HealthCheckupCard
              selType={healthOption}
              type="opt6"
              title="Comprehensive Gold Full Body Checkup with Smart Report"
              testCount="Includes 88 tests"
              serum1="Serum Calcium<"
              serum2="Serum Iron Studies Basic"
              serum3="Vitamin Profile"
              reportTime="24 hours"
              discPrice="2249"
              actualPrice="4498"
            />
            <HealthCheckupCard
              selType={healthOption}
              type="opt6"
              title="Comprehensive Gold Full Body Checkup with Smart Report"
              testCount="Includes 88 tests"
              serum1="Serum Calcium<"
              serum2="Serum Iron Studies Basic"
              serum3="Vitamin Profile"
              reportTime="24 hours"
              discPrice="2249"
              actualPrice="4498"
            />
            <HealthCheckupCard
              selType={healthOption}
              type="opt6"
              title="Comprehensive Gold Full Body Checkup with Smart Report"
              testCount="Includes 88 tests"
              serum1="Serum Calcium<"
              serum2="Serum Iron Studies Basic"
              serum3="Vitamin Profile"
              reportTime="24 hours"
              discPrice="2249"
              actualPrice="4498"
            />
            <HealthCheckupCard
              selType={healthOption}
              type="opt7"
              title="Comprehensive Gold Full Body Checkup with Smart Report"
              testCount="Includes 88 tests"
              serum1="Serum Calcium<"
              serum2="Serum Iron Studies Basic"
              serum3="Vitamin Profile"
              reportTime="24 hours"
              discPrice="2249"
              actualPrice="4498"
            />
            <HealthCheckupCard
              selType={healthOption}
              type="opt8"
              title="Comprehensive Gold Full Body Checkup with Smart Report"
              testCount="Includes 88 tests"
              serum1="Serum Calcium<"
              serum2="Serum Iron Studies Basic"
              serum3="Vitamin Profile"
              reportTime="24 hours"
              discPrice="2249"
              actualPrice="4498"
            />
            <HealthCheckupCard
              selType={healthOption}
              type="opt8"
              title="Comprehensive Gold Full Body Checkup with Smart Report"
              testCount="Includes 88 tests"
              serum1="Serum Calcium<"
              serum2="Serum Iron Studies Basic"
              serum3="Vitamin Profile"
              reportTime="24 hours"
              discPrice="2249"
              actualPrice="4498"
            />
            <HealthCheckupCard
              selType={healthOption}
              type="opt7"
              title="Comprehensive Gold Full Body Checkup with Smart Report"
              testCount="Includes 88 tests"
              serum1="Serum Calcium<"
              serum2="Serum Iron Studies Basic"
              serum3="Vitamin Profile"
              reportTime="24 hours"
              discPrice="2249"
              actualPrice="4498"
            />
            <HealthCheckupCard
              selType={healthOption}
              type="opt9"
              title="Comprehensive Gold Full Body Checkup with Smart Report"
              testCount="Includes 88 tests"
              serum1="Serum Calcium<"
              serum2="Serum Iron Studies Basic"
              serum3="Vitamin Profile"
              reportTime="24 hours"
              discPrice="2249"
              actualPrice="4498"
            />
            <HealthCheckupCard
              selType={healthOption}
              type="opt7"
              title="Comprehensive Gold Full Body Checkup with Smart Report"
              testCount="Includes 88 tests"
              serum1="Serum Calcium<"
              serum2="Serum Iron Studies Basic"
              serum3="Vitamin Profile"
              reportTime="24 hours"
              discPrice="2249"
              actualPrice="4498"
            />
            <HealthCheckupCard
              selType={healthOption}
              type="opt9"
              title="Comprehensive Gold Full Body Checkup with Smart Report"
              testCount="Includes 88 tests"
              serum1="Serum Calcium<"
              serum2="Serum Iron Studies Basic"
              serum3="Vitamin Profile"
              reportTime="24 hours"
              discPrice="2249"
              actualPrice="4498"
            />
            <HealthCheckupCard
              selType={healthOption}
              type="opt9"
              title="Comprehensive Gold Full Body Checkup with Smart Report"
              testCount="Includes 88 tests"
              serum1="Serum Calcium<"
              serum2="Serum Iron Studies Basic"
              serum3="Vitamin Profile"
              reportTime="24 hours"
              discPrice="2249"
              actualPrice="4498"
            />
          </div>
        </div>
      </div>
    </>
  );
};
