export const FAQ = () => {
  return (
    <>
      <div className="text-3xl text-gray-500 mt-20 text-center font-bold">
        Frequently Asked Question
      </div>
      <div className="w-full flex justify-center mt-20">
        <div className="flex flex-col gap-y-5 w-9/12">
          <div className="q1 flex flex-col gap-y-3">
            <div className="Qs text-xl font-medium">
              When will I get an answer to my query? What happens if I don’t get
              a response?
            </div>
            <div className="ans text-lg font-medium text-gray-500">
              If you opt for a free consult, then we make sure the doctor
              replies within 24 to 48 hours. In case of a paid consult, you will
              receive a reply within 2-4 business hours. However, if you do not
              get any response within the stipulated time, we will refund your
              money back into your account.
            </div>
          </div>
          <div className="w-full bg-gray-300 h-[0.5px]"></div>
          <div className="q1 flex flex-col gap-y-3">
            <div className="Qs text-xl font-medium">
              Who are the consulting doctors?
            </div>
            <div className="ans text-lg font-medium text-gray-500">
              All the doctors are registered medical practitioners. Along with
              qualifying degrees - experience, research and track-record of
              practice are taken into account before a doctor is credentialed
              with Tata 1mg and is given access to answer patient queries.
            </div>
          </div>
          <div className="w-full bg-gray-300 h-[0.5px]"></div>
          <div className="q1 flex flex-col gap-y-3">
            <div className="Qs text-xl font-medium">
              Will the doctor be able to resolve my issue?
            </div>
            <div className="ans text-lg font-medium text-gray-500">
              Our doctors will give you expert advice on your problem and help
              you identify next steps which may include further tests, medicine
              recommendation or lifestyle tips. Few cases require face-to-face
              examination and we do ask patients to share pictures or reports if
              they can, for a conclusive diagnosis.
            </div>
          </div>
          <div className="w-full bg-gray-300 h-[0.5px]"></div>
          <div className="q1 flex flex-col gap-y-3">
            <div className="Qs text-xl font-medium">
              Is my consultation private with my doctor?
            </div>
            <div className="ans text-lg font-medium text-gray-500">
              Privacy of data is one of the fundamental human rights and we at
              Tata 1mg understand that. All your medical history and online
              consultation with us are completely private and confidential. We
              are compliant with industry standards to ensure your consultations
              are securely stored.
            </div>
          </div>
          <div className="w-full bg-gray-300 h-[0.5px]"></div>
          <div className="q1 flex flex-col gap-y-3">
            <div className="Qs text-xl font-medium">
              For how long is the consultation valid?
            </div>
            <div className="ans text-lg font-medium text-gray-500">
              In the case of a paid consult, you can follow-up with your doctor
              for up to 3 days. In case you opt for a free consult, follow-up
              questions are valid for one day only.
            </div>
          </div>
          <div className="w-full bg-gray-300 h-[0.5px]"></div>
          <div className="q1 flex flex-col gap-y-3">
            <div className="Qs text-xl font-medium">
              Do you have a refund policy?
            </div>
            <div className="ans text-lg font-medium text-gray-500">
              We have a “take-it-easy” policy. If for any reason you’re not
              convinced with your online consultation, you can write to us at
              contact@1mgdoctors.com and we will review the consult with the
              doctor - seeking clarifications on your queries that were
              answered. 100% refund will be given in genuine cases.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
